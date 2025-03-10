import { DateTime } from 'luxon';

export const formatDate = (dateString: string | null) => {
  if (dateString === null) {
    return '--';
  }

  const userTimeZone = DateTime.local().zoneName;
  return DateTime.fromISO(dateString, { zone: 'utc' })
    .setZone(userTimeZone)
    .toFormat('dd MMMM yyyy, h:mm a');
};
