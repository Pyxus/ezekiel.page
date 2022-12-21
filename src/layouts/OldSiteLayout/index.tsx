import SideBar from "@components/SideBar";
import SideBarItem from "@components/SideBar/SideBarItem";
import SideBarSection from "@components/SideBar/SideBarSection";
import type React from "react";
import {
  FaHome,
  FaPencilRuler,
  FaPalette,
  FaGithubAlt,
  FaYoutube,
  FaBriefcase,
} from "react-icons/fa";
import { HiChatBubbleBottomCenterText } from "react-icons/hi2";
import { MdWavingHand } from "react-icons/md";

interface SiteLayoutProps {
  children?: React.ReactNode;
  title?: string;
  currentPath?: String;
}

export default function SiteLayout({
  children,
  title,
  currentPath,
}: SiteLayoutProps) {
  return (
    <>
      <html lang="en">
        <head>
          <meta name="viewport" content="width=device-width" />
          <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
          <title>{title}</title>
        </head>
        <body>
          <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
              <OpenSideBarButton />
              {children}
            </div>
            <div className="drawer-side">
              <label className="drawer-overlay"></label>
              <div className="p-4 w-64 h-full bg-base-300 text-base-content">
                <ProfileSection />
                <Menu currentPath={currentPath} />
              </div>
            </div>
          </div>
        </body>
      </html>
    </>
  );
}

function OpenSideBarButton() {
  return (
    <label
      htmlFor="my-drawer-2"
      className="btn btn-primary drawer-button lg:hidden"
    >
      Open drawer
    </label>
  );
}

function Menu({ currentPath }: SiteLayoutProps) {
  return (
    <SideBar>
    {/* Navigation */}
    <SideBarSection text="Navigation" showDivier={false} />
    <SideBarItem href="/">
      <FaHome /> Home
    </SideBarItem>
    <SideBarItem href="/blog">
      <HiChatBubbleBottomCenterText /> Blog
    </SideBarItem>
    <SideBarItem href="/projects">
      <FaPencilRuler /> Projects
    </SideBarItem>
    <SideBarItem href="/art">
      <FaPalette /> Art
    </SideBarItem>
    <SideBarItem href="/about">
      <MdWavingHand /> About
    </SideBarItem>

    {/* Links */}
    <SideBarSection text="Links" showDivier={true} />
    <SideBarItem href="https://github.com/pyxus">
      <FaGithubAlt /> Github
    </SideBarItem>
    <SideBarItem href="https://www.youtube.com/@Pyxus/">
      <FaYoutube /> Youtube
    </SideBarItem>
    <SideBarItem href="/">
      <FaBriefcase /> My Conventions
    </SideBarItem>
  </SideBar>
  );
}

function ProfileSection() {
  return (
    <div className="flex flex-col items-center justify-center pb-6">
      <a href="">
        <div className="avatar flex flex-col items-center justify-center pb-3">
          <div className="w-32 rounded-full ring ring-accent ring-offset-base-100 ring-offset-2">
            <div className="bg-primary">
              <img
                src="src/images/pfp-transparent.png"
                className="scale-[.80] translate-x-1 translate-y-[-.95rem]"
              />
            </div>
          </div>
        </div>
        <div className="text-2xl">
          <strong>Ezekiel Halley</strong>
        </div>
      </a>
    </div>
  );
}
