import React, { useRef } from "react";
import Link from "next/link";
import { defaultNavItems } from "@common/constants/navitems";
import { useOnClickOutside } from "usehooks-ts";

// define a NavItem prop
export type NavItem = {
  label: string;
  href: string;
};
// add NavItem prop to component prop
type Props = {
  open: boolean;
  navItems?: NavItem[];
  setOpen(open: boolean): void;
};
const Sidebar = ({ open, navItems = defaultNavItems, setOpen }: Props) => {
  const ref = useRef<HTMLDivElement>(null);

  useOnClickOutside(ref, () => {
    setOpen(false);
  });

  return (
    <div
      className={`flex flex-col justify-between bg-indigo-700 text-zinc-50 md:sticky md:top-16 md:z-0 top-0 z-20 fixed md:h-[calc(100vh_-_64px)] h-full w-[220px] md:-translate-x-0  ${
        !open ? "-translate-x-full" : ""
      }`}
      ref={ref}
    >
      <nav className="top-0 md:sticky md:top-16">
        {/* nav items */}
        <ul className="flex flex-col gap-2 py-2">
          {navItems.map((item, index) => {
            return (
              <Link key={index} href={item.href}>
                <li className="flex items-center gap-4 p-2 mx-2 text-indigo-100 transition-colors duration-300 rounded-md hover:bg-indigo-900">
                  {item.label}
                </li>
              </Link>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};
export default Sidebar;
