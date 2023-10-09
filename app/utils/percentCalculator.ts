export const percentCalculator = ({
  value1,
  value2,
}: {
  value1: number;
  value2: number;
}) => {
  return Math.round((value1 / value2) * 100);
};
