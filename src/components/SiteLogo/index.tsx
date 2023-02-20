import React from "react";

interface SiteLogoProps {
  logoSrc?: string;
  href?: string;
}

export default function SiteLogo({ logoSrc, href }: SiteLogoProps) {
  return (
    <a href={href}>
      <div className="pt-8 pb-4 text-white hover:bg-black">
        <div className="bg-highlight border mx-auto w-36 h-[7.7rem] border-accent overflow-hidden">
          <img
            className="mx-auto translate-y-1"
            width="100px"
            src={logoSrc}
            alt={"Cartoon drawing of Ezekiel"}
          />
        </div>
        <h1 className="m-2 text-lg font-bold text-center">Ezekiel Halley</h1>
        <span className="ml-3 mr-3 text-xs font-thin text-center">
          Developer & Digital Artist
        </span>
      </div>
    </a>
  );
}
