import type React from "react";

interface ToolTipProps {
  tooltip?: string;
  children?: React.ReactNode;
}


export default function ToolTip({ tooltip, children }: ToolTipProps) {
  return (
    <div
      className={
        true // NOTE: Disabled until a better solution is found
          ? ""
          : `
    relative before:z-10 
    before:absolute 
    before:left-1/2 
    before:-bottom-3 
    before:w-max 
    before:max-w-xs 
    before:-translate-x-1/2 
    before:translate-y-full 
    before:rounded-lg 
    before:bg-black
    before:px-2 
    before:py-1.5 
    before:text-white 
    before:invisible 
    before:content-[attr(data-tip)] 
    after:z-10 
    after:absolute 
    after:left-1/2 
    after:-bottom-3 
    after:h-0 
    after:w-0 
    after:-translate-x-1/2 
    after:border-8 
    after:border-b-black
    after:border-l-transparent 
    after:border-t-transparent 
    after:border-r-transparent 
    after:invisible 
    hover:before:visible 
    hover:after:visible`
      }
      data-tip={tooltip}
    >
      {children}
    </div>
  );
}
