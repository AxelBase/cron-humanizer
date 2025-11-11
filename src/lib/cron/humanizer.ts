// src/lib/cron/humanizer.ts

const fieldNames = ['minute', 'hour', 'day of month', 'month', 'day of week'];
const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

function humanizeSingleValue(value: string, index: number): string {
  const num = parseInt(value, 10);
  if (isNaN(num)) return value;

  if (index === 3 && num >= 1 && num <= 12) { // month
    return monthNames[num - 1];
  }
  if (index === 4 && num >= 0 && num <= 7) { // day of week
    return dayNames[num % 7];
  }
  return value;
}

function humanizeField(field: string, index: number): string {
  if (field === '*') return 'every ' + fieldNames[index];

  if (field.includes('/')) {
    const [base, step] = field.split('/');
    const baseStr = base === '*' ? 'every' : humanizeField(base, index);
    const plural = parseInt(step, 10) > 1 ? 's' : '';
    return `${baseStr} ${step} ${fieldNames[index]}${plural}`;
  }

  if (field.includes('-')) {
    const [start, end] = field.split('-');
    const startStr = humanizeSingleValue(start, index);
    const endStr = humanizeSingleValue(end, index);
    return `from ${startStr} through ${endStr}`;
  }

  if (field.includes(',')) {
    const list = field.split(',').map(v => humanizeSingleValue(v, index));
    const last = list.pop();
    return list.join(', ') + (list.length ? ' and ' : '') + last;
  }

  return humanizeSingleValue(field, index);
}

function isSingleNumber(field: string): boolean {
  return /^\d+$/.test(field);
}

export function humanizeCron(cron: string): string {
  const fields = cron.split(' ');
  if (fields.length !== 5) return 'Invalid cron expression';

  const [min, hour, dom, month, dow] = fields.map((f, i) => humanizeField(f, i));

  if (cron === '* * * * *') return 'Every minute';

  let desc = '';

  // Handle time part
  if (isSingleNumber(fields[0]) && isSingleNumber(fields[1])) {
    const minPad = fields[0].padStart(2, '0');
    const hourPad = fields[1].padStart(2, '0');
    desc += `At ${hourPad}:${minPad}`;
  } else if (fields[0] === '0' && fields[1] === 'every hour') {
    desc += 'Every hour on the hour';
  } else if (min.startsWith('every') || hour.startsWith('every')) {
    if (min !== 'every minute' && hour === 'every hour') {
      desc += min.charAt(0).toUpperCase() + min.slice(1);
    } else if (min === 'every minute' && hour !== 'every hour') {
      desc += `Every minute during ${hour}`;
    } else {
      desc += `At minute ${min}`;
      if (hour !== 'every hour') desc += ` past ${hour}`;
    }
  } else {
    desc += `At minute ${min}`;
    if (hour !== 'every hour') desc += ` past ${hour}`;
  }

  // Handle day/month/dow part
  const hasDaySpec = fields[2] !== '*' || fields[3] !== '*' || fields[4] !== '*';
  if (hasDaySpec) {
    desc += ', ';
  } else if (desc.includes('every') || desc.includes('Every')) {
    // No 'every day' if already 'every X'
    return desc;
  } else {
    desc += ' every day';
    return desc;
  }

  if (dow !== 'every day of week') {
    desc += `only on ${dow}`;
  } else if (dom !== 'every day of month') {
    desc += `on ${dom}`;
    if (month !== 'every month') desc += ` of ${month}`;
  } else if (month !== 'every month') {
    desc += `every day in ${month}`;
  }

  return desc.replace(/every day of month/g, 'every day').replace(/every month/g, '').replace(/every day of week/g, '');
}