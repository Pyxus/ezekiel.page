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
    <li className={isHighlighted ? "bordered" : "hover-bordered"}>
      <a href={href}>{children}</a>
    </li>
  );
}
