import type React from "react";

interface SideBarProps {
  children?: React.ReactNode;
}

export default function SideBar({ children }: SideBarProps) {
  return (
    <div className="border border-accent bg-primary">
      <div className="flex justify-center">
        {children}
      </div>
    </div>
  );
}
