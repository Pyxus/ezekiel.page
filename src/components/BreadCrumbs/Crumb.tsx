import React from "react";

interface CrumbProps {
  icon?: any;
  href?: string;
  text: string;
}

export default function Crumb({ href, text }: CrumbProps) {
  return (
    <li>
      <a href={href}>{text}</a>
    </li>
  );
}
