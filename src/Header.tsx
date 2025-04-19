"use client";

import React, {
  useState,
  useEffect,
  useRef,
  PropsWithChildren,
  FocusEvent,
} from "react";
import "./Header.css";
import fnnbrrLogo from "../public/fnnbrr_logo_outlined_2x.png";
import hamburgerIcon from "../public/hamburger_icon_white.svg";
import xMark from "../public/x-mark.svg";
import { usePathname } from "next/navigation";
import Link from "next/link";

function MenuHamburger({ children }: PropsWithChildren) {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const parent = useRef<HTMLButtonElement>(null);
  const pathname: string = usePathname();

  useEffect(() => {
    setIsExpanded(false);
  }, [pathname]);

  function OnClick(): void {
    setIsExpanded(!isExpanded);
  }

  function OnBlur(event: FocusEvent<HTMLButtonElement>): void {
    if (parent.current === null) return;

    if (!parent.current.contains(event.relatedTarget)) {
      setIsExpanded(false);
    }
  }

  const linksVertical = <div className={"links-vertical"}>{children}</div>;

  return (
    <button ref={parent} className={"hamburger-button"} onBlur={OnBlur}>
      <img
        src={isExpanded ? xMark.src : hamburgerIcon.src}
        alt={"navigation hamburger menu"}
        onClick={OnClick}
      ></img>
      <>{isExpanded ? linksVertical : null}</>
    </button>
  );
}

interface HeaderLinkProps {
  route: string;
  label: string;
}

function HeaderLink({
  route,
  label,
  children,
}: PropsWithChildren<HeaderLinkProps>) {
  const pathname: string = usePathname();

  function GetLinkClasses(): string {
    let classes = "link-text";

    // Includes if a descendant of the route is active
    let isRouteActive: boolean;

    if (route === "/") {
      // Special case for root so it doesn't match for every other route
      isRouteActive = pathname === route;
    } else {
      isRouteActive = pathname.includes(route);
    }

    classes = classes.concat(isRouteActive ? " active" : " inactive");

    if (children !== undefined) {
      classes = classes.concat(" non-clickable");
    }

    return classes;
  }

  return (
    <div className="link-expandable" tabIndex={0}>
      {children === undefined ? null : (
        <span className={"link-child-indicator"}>&lt;</span>
      )}
      <Link href={route} className={GetLinkClasses()}>
        {label}
      </Link>
      <div className={"link-child-container"}>{children}</div>
    </div>
  );
}

function HeaderLinks() {
  return (
    <>
      <HeaderLink route={"/"} label={"home"} />
      <HeaderLink route={"/projects"} label={"projects"}>
        <HeaderLink route={"/projects/scoober-splat"} label={"Scoober Splat"} />
        <HeaderLink route={"/projects/automagical"} label={"Automagical"} />
        <HeaderLink
          route={"/projects/distortion-camera"}
          label={"distortion camera"}
        />
        <HeaderLink
          route={"/projects/claim-denier"}
          label={"Health Insurance Claim Denier"}
        />
      </HeaderLink>
      <HeaderLink route={"/blog"} label={"blog"}>
        <HeaderLink route={"/blog/job-search-2024"} label={"job search 2024"} />
      </HeaderLink>
      <HeaderLink route={"/resume"} label={"resume"} />
      <HeaderLink route={"/contact"} label={"contact"} />
    </>
  );
}

export default function Header() {
  const header = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    // To scroll page to top and reset focus when changing routes
    header.current?.focus();
    header.current?.blur();
  }, [pathname]);

  return (
    <div className={"Header"} ref={header} tabIndex={0}>
      <Link href="/" className={"Logo"}>
        <img src={fnnbrrLogo.src} alt={"https://fnnbrr.com"} />
      </Link>

      <div className={"links-horizontal"}>
        <HeaderLinks />
      </div>

      <MenuHamburger>
        <HeaderLinks />
      </MenuHamburger>
    </div>
  );
}
