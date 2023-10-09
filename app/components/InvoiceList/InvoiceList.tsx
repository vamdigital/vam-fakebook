"use client";

import { compareDates } from "@/app/utils/compareDates";
import { currencyConverter } from "@/app/utils/currencyConverter";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
  linkHref: string;
  customerName: string;
  customerSince: string;
  amountDue: number;
  dueDate: string;
  isPaid: boolean;
};

export const InvoiceList = ({
  linkHref,
  customerName,
  customerSince,
  amountDue,
  dueDate,
  isPaid,
}: Props) => {
  const pathName = usePathname();
  const isActive = pathName.includes(linkHref);
  const activeClass = isActive ? "bg-gray-200" : "";
  const dueAmount = currencyConverter(amountDue);
  const comparedDates = compareDates({ dueDate });
  const paymentStatus: string = isPaid ? "Paid" : comparedDates;

  console.log(paymentStatus);
  const paymentStatusClassName =
    paymentStatus === "Paid"
      ? "text-green-500"
      : paymentStatus === ("overdue" as string)
      ? "text-red-500"
      : "text-gray-500";

  return (
    <li className={`flex items-center ${activeClass}`}>
      <Link href={linkHref} className="flex justify-between w-full p-4">
        <div className="flex flex-col">
          <h2 className="font-bold text-sm">{customerName}</h2>
          <h4 className="text-sm">{customerSince}</h4>
        </div>
        <div className="flex flex-col text-right">
          <h2 className="font-bold text-sm">{dueAmount}</h2>
          <h4 className={`uppercase text-sm ${paymentStatusClassName}`}>
            {paymentStatus}
          </h4>
        </div>
      </Link>
    </li>
  );
};
