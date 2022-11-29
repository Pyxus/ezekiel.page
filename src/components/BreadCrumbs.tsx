import React from "react";

type Crumb = {
  text: string;
  href: string;
};

interface BreadCrumbsProps {
  crumbs: Crumb[];
}

export default function BreadCrumbs({ crumbs }: BreadCrumbsProps) {
  return (
    <div className="flex text-sm breadcrumbs">
      <ul>
        {crumbs.map((crumb) => (
          <li>
            <a href={crumb.href}>{crumb.text}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
