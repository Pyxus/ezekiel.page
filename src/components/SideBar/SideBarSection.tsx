import React from "react";

interface SideBarSectionProps {
  text?: string;
  showDivier?: boolean;
}

export default function SideBarSection({
  text,
  showDivier,
}: SideBarSectionProps) {
  return (
    <>
      {showDivier ? <li></li> : <></>}
      <li className="menu-title">
        <span>{text}</span>
      </li>
    </>
  );
}
