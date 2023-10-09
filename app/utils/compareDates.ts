export const compareDates = ({ dueDate }: { dueDate: string }) => {
  let d = Date.now();
  let d1 = new Date(dueDate);
  let d2 = new Date(d);
  let diffInDays = Math.round(
    (d1.getTime() - d2.getTime()) / (1000 * 3600 * 24)
  );

  if (diffInDays < 0) {
    return "overdue";
  }
  if (diffInDays === 0) {
    return "due today";
  }

  return `due in ${diffInDays} days`;
};
