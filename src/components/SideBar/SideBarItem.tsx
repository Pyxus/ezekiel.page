import type React from "react";

interface SideBarItemProps {
  children?: React.ReactNode;
  text?: string;
  href?: string;
  isHighlighted?: boolean;
}

export default function SideBarItem({
  children,
  href,
  isHighlighted,
}: SideBarItemProps) {
  return (
    <li className={"justify-center m-4 columns-1"}>
      <a href={href}>{children}</a>
    </li>
  );
}
