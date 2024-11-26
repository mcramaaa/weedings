export const convertDate = (date: string) => {
  const utcDate = new Date(date); // Convert string date to Date object
  const jakartaOffset = 7 * 60; // Offset in minutes (UTC+7)
  const jktDate = new Date(utcDate.getTime() + jakartaOffset * 60000); // Convert to UTC+7
  return jktDate;
};
