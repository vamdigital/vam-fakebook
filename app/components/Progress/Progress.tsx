import { currencyConverter } from "@/app/utils/currencyConverter";
import { percentCalculator } from "@/app/utils/percentCalculator";

type Props = {
  overDue: number;
  dueSoon: number;
};
export const Progress = ({ overDue, dueSoon }: Props) => {
  const percentage = percentCalculator({ value1: overDue, value2: dueSoon });
  const overDueAmount = currencyConverter(overDue);
  const dueSoonAmount = currencyConverter(dueSoon);

  return (
    <div className="flex w-100 justify-between items-center">
      <div className="flex flex-col justify-center items-center w-[100px]">
        <span className="flex uppercase text-gray-400 text-sm">OverDue</span>
        <span className="flex font-bold text-center">{overDueAmount}</span>
      </div>
      <div className="flex flex-col w-2/3 h-5 rounded-2xl bg-green-500 relative">
        <div
          className={`absolute inset-0 bg-yellow-400 rounded-2xl`}
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
      <div className="flex flex-col justify-center items-center w-[100px]">
        <span className="flex uppercase text-gray-400 text-sm">Due Soon</span>
        <span className="flex font-bold">{dueSoonAmount}</span>
      </div>
    </div>
  );
};
