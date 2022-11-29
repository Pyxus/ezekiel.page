import type React from "react";

interface BreadCrumbsProps {
  children?: React.ReactNode
}

export default function BreadCrumbs({ children }: BreadCrumbsProps) {
  return (
    <div className="flex text-sm breadcrumbs">
      <ul>
        {children}
      </ul>
    </div>
  );
}
