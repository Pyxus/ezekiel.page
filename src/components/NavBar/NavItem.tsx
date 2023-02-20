import ToolTip from "@components/ToolTip";
import type React from "react";

interface NavItemProps {
  children?: React.ReactNode;
  href?: string;
  isHighlighted?: boolean;
  tooltip?: string;
}

export default function NavItem({
  children,
  href,
  isHighlighted,
  tooltip,
}: NavItemProps) {
  return (
    <a href={href}>
      <ToolTip tooltip={tooltip}>
        <li
          className={`py-4 flex border border-black ${
            isHighlighted
              ? "text-highlight bg-[#151927]"
              : "hover:text-white hover:bg-black"
          }`}
        >
          <div className="mx-auto">{children}</div>
          <div
            className={`w-1 h-auto -translate-x-2 bg-highlight ${
              isHighlighted ? "bg-highlight" : "opacity-0"
            }`}
          />
        </li>
      </ToolTip>
    </a>
  );
}
