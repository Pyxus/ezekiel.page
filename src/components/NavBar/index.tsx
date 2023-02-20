import type React from "react";

interface NavBarProps {
  children?: React.ReactNode;
}

export default function NavBar({ children }: NavBarProps) {
  return (
    <div className="">
      <nav>{children}</nav>
    </div>
  );
}
