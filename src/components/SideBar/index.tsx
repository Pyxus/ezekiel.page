import type React from "react";

interface SideBarProps {
  children?: React.ReactNode;
}

export default function SideBar({ children }: SideBarProps) {
  return (
    <nav>
      <ul className="menu">{children}</ul>
    </nav>
  );
}
