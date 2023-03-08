import type React from "react";
import { FiGlobe } from "react-icons/fi/index.js";
import { FaWindowMinimize } from "react-icons/fa/index.js";
import { RiWindow2Fill, RiCloseFill } from "react-icons/ri/index.js";

interface WindowContainerProps{
    title?: string
    children?: React.ReactNode;
}

export default function WindowContainerProps({children, title}: WindowContainerProps) {
  return (
    <div className="w-6/12 m-2 text-white border shadow-2xl border-accent bg-primary">
      <div className="inline-flex w-full p-2 font-bold text-accent">
        <FiGlobe className={"my-auto mr-2"} />
        <span className="">{title}</span>
        <span className="inline-flex ml-auto">
          <div className="p-[.08rem] my-auto mr-2 hover:opacity-0 transition text-black bg-neutral">
            <FaWindowMinimize />
          </div>
          <div className="p-[.08rem] my-auto mr-2 hover:opacity-0 transition text-black bg-neutral">
            <RiWindow2Fill />
          </div>
          <div className="p-[.08rem] my-auto mr-2 hover:opacity-0 transition text-black bg-highlight">
            <RiCloseFill />
          </div>
        </span>
      </div>
      <div className="mx-3 mb-3 text-black border border-accent bg-neutral">
        {children}
      </div>
    </div>
  );
}
