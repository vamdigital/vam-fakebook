import { NavLinks } from "../components/NavLinks/NavLinks";
import { PageTitle } from "../components/PageTitle";
import { salesLinks } from "../utils/navLinksData";

export default function SalesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col w-full">
      <div className="flex">
        <PageTitle pageTitle="Sales" />
      </div>
      <div className="flex border-b border-b-gray-300 p-3">
        <NavLinks
          navLinks={salesLinks}
          isCol={false}
          hasBg={false}
          linkClassName="text-gray-400"
        />
      </div>
      <div className="container">
        <section className="flex flex-col w-full mt-10">{children}</section>
      </div>
    </section>
  );
}
