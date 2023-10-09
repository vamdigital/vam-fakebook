"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

interface Navs {
  id: number;
  href: string;
  label: string;
}

interface Props {
  navLinks: Navs[];
  isCol: boolean;
  hasBg: boolean;
  linkClassName?: string;
}

export const NavLinks = ({ navLinks, isCol, hasBg, linkClassName }: Props) => {
  const pathName = usePathname();
  const colClassName = isCol ? "flex-col" : "";
  const activeCl = hasBg ? "bg-gray-200 rounded-md" : "text-gray-700";
  const linkAdditionalClassName = linkClassName ?? "";

  return (
    <nav className="flex w-full">
      <ul className={`flex w-full gap-4 ${colClassName}`}>
        {navLinks.map((item) => {
          const activeLink = pathName.includes(item.href);
          const activeClass = activeLink ? activeCl : "";
          return (
            <li key={item.id} className="flex">
              <Link
                href={item.href}
                className={`flex p-2 font-bold text-sm ${activeClass} ${linkAdditionalClassName}`}
              >
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
