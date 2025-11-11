import { CronExpressionParser } from 'cron-parser';
import { format } from 'date-fns';

export function getNextRunTimes(cron: string, count: number = 10): string[] {
  const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const options = {
    currentDate: new Date(Date.now() + 1000), // start from next second to avoid past runs
    tz
  };

  try {
    const interval = CronExpressionParser.parse(cron.trim(), options);
    const dates: Date[] = interval.take(count);
    return dates.map(d => format(d, 'dd MMM yyyy, HH:mm:ss'));
  } catch (err) {
    return [];
  }
}

export function getTimezone(): string {
  return Intl.DateTimeFormat().resolvedOptions().timeZone;
}
