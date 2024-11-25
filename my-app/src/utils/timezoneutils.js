import moment from 'moment-timezone';

// Convert UTC to a user's local timezone
export const convertToTimezone = (utcTime, timezone) =>
  moment.utc(utcTime).tz(timezone).format('YYYY-MM-DD HH:mm:ss');
