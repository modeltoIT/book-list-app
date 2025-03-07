import { DateTime } from 'luxon';

export const formatDate = (dateString: string) => {
  const userTimeZone = DateTime.local().zoneName;
  return DateTime.fromISO(dateString, { zone: 'utc' })
    .setZone(userTimeZone)
    .toFormat('dd MMMM yyyy, h:mma');
};
