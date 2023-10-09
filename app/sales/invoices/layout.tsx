import { InvoiceList } from "@/app/components/InvoiceList";
import { Progress } from "@/app/components/Progress";

type Props = {
  children: React.ReactNode;
};

export default function InvoiceLayout({ children }: Props) {
  return (
    <section className="flex flex-col w-full">
      <Progress dueSoon={62000} overDue={10600} />
      <div className="flex flex-col mt-5">
        <div className="flex p-2">
          <h2 className="text-gray-500 text-sm uppercase">Invoice List</h2>
        </div>
        <div className="flex w-full border-[1px] border-gray-300 rounded-md">
          <div className="flex flex-col w-full border-r-[1px] border-gray-300">
            <ul className="flex flex-col w-full">
              <InvoiceList
                linkHref="/sales/invoices/1"
                amountDue={10800}
                customerName="Santa Monica"
                customerSince="1995"
                dueDate="08/10/2023"
                isPaid={false}
              />
              <InvoiceList
                linkHref="/sales/invoices/1"
                amountDue={8000}
                customerName="Stankonia"
                customerSince="2000"
                dueDate="10/01/2023"
                isPaid={false}
              />
              <InvoiceList
                linkHref="/sales/invoices/1"
                amountDue={9500}
                customerName="Ocean Avenue"
                customerSince="2003"
                dueDate="09/27/2023"
                isPaid={true}
              />
              {/* <li className="flex items-center bg-gray-200">
                <Link
                  href="/"
                  className="flex justify-between w-full
                  p-4"
                >
                  <div className="flex flex-col">
                    <h2 className="font-bold text-sm">Santa Monica</h2>
                    <h4 className="text-sm">1995</h4>
                  </div>
                  <div className="flex flex-col text-center">
                    <h2 className="font-bold text-sm">$10,800</h2>
                    <h4 className="uppercase text-sm">Overdue</h4>
                  </div>
                </Link>
              </li>
              <li className="flex items-center">
                <Link
                  href="/"
                  className="flex justify-between w-full
                  p-4"
                >
                  <div className="flex flex-col">
                    <h2 className="font-bold text-sm">Santa Monica</h2>
                    <h4 className="text-sm">1995</h4>
                  </div>
                  <div className="flex flex-col text-center">
                    <h2 className="font-bold text-sm">$10,800</h2>
                    <h4 className="uppercase text-sm">Overdue</h4>
                  </div>
                </Link>
              </li>
              <li className="flex items-center">
                <Link
                  href="/"
                  className="flex justify-between w-full
                  p-4"
                >
                  <div className="flex flex-col">
                    <h2 className="font-bold text-sm">Santa Monica</h2>
                    <h4 className="text-sm">1995</h4>
                  </div>
                  <div className="flex flex-col text-center">
                    <h2 className="font-bold text-sm">$10,800</h2>
                    <h4 className="uppercase text-sm">Overdue</h4>
                  </div>
                </Link>
              </li>
              <li className="flex items-center">
                <Link
                  href="/"
                  className="flex justify-between w-full
                  p-4"
                >
                  <div className="flex flex-col">
                    <h2 className="font-bold text-sm">Santa Monica</h2>
                    <h4 className="text-sm">1995</h4>
                  </div>
                  <div className="flex flex-col text-center">
                    <h2 className="font-bold text-sm">$10,800</h2>
                    <h4 className="uppercase text-sm">Overdue</h4>
                  </div>
                </Link>
              </li>
              <li className="flex items-center">
                <Link
                  href="/"
                  className="flex justify-between w-full
                  p-4"
                >
                  <div className="flex flex-col">
                    <h2 className="font-bold text-sm">Santa Monica</h2>
                    <h4 className="text-sm">1995</h4>
                  </div>
                  <div className="flex flex-col text-center">
                    <h2 className="font-bold text-sm">$10,800</h2>
                    <h4 className="uppercase text-sm">Overdue</h4>
                  </div>
                </Link>
              </li> */}
            </ul>
          </div>
          <div className="flex flex-col w-full justify-center px-5 items-center">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}
