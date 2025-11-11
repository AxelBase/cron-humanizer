import { CronExpressionParser } from 'cron-parser';

export interface ValidationResult {
  valid: boolean;
  error?: string;
}

// Custom ultra-accurate validator – replaces unreliable cron-parser errors
export function validateCron(expression: string): ValidationResult {
  const trimmed = expression.trim();
  if (!trimmed) return { valid: false, error: "Please enter a cron expression" };

  const fields = trimmed.split(/\s+/);
  if (fields.length !== 5) {
    return { valid: false, error: "Exactly 5 fields required: minute hour day month dow" };
  }

  const ranges = [
    { name: "minute", min: 0, max: 59 },
    { name: "hour", min: 0, max: 23 },
    { name: "day of month", min: 1, max: 31 },
    { name: "month", min: 1, max: 12 },
    { name: "day of week", min: 0, max: 7 }
  ];

  for (let i = 0; i < fields.length; i++) {
    const field = fields[i];
    const range = ranges[i];

    if (field === "*") continue;
    if (field === "?" || field === "L" || field === "W") continue; // allowed in some contexts

    const parts = field.split(",");
    for (const part of parts) {
      if (part.includes("/")) {
        const [base, step] = part.split("/");
        if (!step || isNaN(+step) || +step <= 0) {
          return { valid: false, error: `Invalid step value '/${step}' in ${range.name}` };
        }
        if (base !== "*" && !isValidPart(base, range)) {
          return { valid: false, error: `Invalid base in step: ${base} (${range.name})` };
        }
        continue;
      }

      if (part.includes("-")) {
        const [start, end] = part.split("-");
        if (isNaN(+start) || isNaN(+end)) {
          return { valid: false, error: `Invalid range: ${part} in ${range.name}` };
        }
        if (+start < range.min || +end > range.max || +start > +end) {
          return { valid: false, error: `Range ${part} out of bounds for ${range.name} (${range.min}-${range.max})` };
        }
      } else {
        if (!isValidPart(part, range)) {
          return { valid: false, error: `${range.name.charAt(0).toUpperCase() + range.name.slice(1)} must be ${range.min}–${range.max} (got ${part})` };
        }
      }
    }
  }

  // Final fallback: let cron-parser confirm (it will only fail on obscure cases now)
  try {
    CronExpressionParser.parse(trimmed);
    return { valid: true };
  } catch {
    return { valid: false, error: "Invalid cron expression (advanced syntax error)" };
  }
}

function isValidPart(part: string, range: { min: number; max: number }): boolean {
  if (part === "*" || part.includes("-") || part.includes("/")) return true;
  const num = parseInt(part);
  return !isNaN(num) && num >= range.min && num <= range.max;
}
