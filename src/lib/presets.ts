// src/lib/presets.ts

export interface Preset {
  label: string;
  value: string;
}

export const presets: Preset[] = [
  { label: 'Every minute', value: '* * * * *' },
  { label: 'Every 5 minutes', value: '*/5 * * * *' },
  { label: 'Every hour', value: '0 * * * *' },
  { label: 'Daily at midnight', value: '0 0 * * *' },
  { label: 'Daily at 9 AM', value: '0 9 * * *' },
  { label: 'Weekdays at 9 AM', value: '0 9 * * 1-5' },
  { label: 'Weekly on Monday', value: '0 0 * * 1' },
  { label: 'Monthly on 1st', value: '0 0 1 * *' },
];