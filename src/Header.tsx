import React, { useState, useEffect, useRef, PropsWithChildren, FocusEvent } from "react";
import './Header.css'
import { Link, NavLink, useLocation } from "react-router-dom"
import fnnbrrLogo from "./assets/fnnbrr_logo_outlined_2x.png";
import hamburgerIcon from "./assets/hamburger_icon_white.svg";
import xMark from "./assets/x-mark.svg";

function MenuHamburger({children}: PropsWithChildren) {
    const [isExpanded, setIsExpanded] = useState<boolean>(false);
    const parent = useRef<HTMLButtonElement>(null);
    let location = useLocation();
    
    useEffect(() => {
        setIsExpanded(false);
    }, [location]);
    
    function OnClick(): void {
        setIsExpanded(!isExpanded);
    }
    
    function OnBlur(event: FocusEvent<HTMLButtonElement>): void {
        if (parent.current === null) return;
        
        if (!parent.current.contains(event.relatedTarget)) {
            setIsExpanded(false);
        }
    }
    
    const linksVertical = (
        <div className={"links-vertical"}>
            {children}
        </div>
    );
    
    return (
        <button ref={parent} className={"hamburger-button"} onBlur={OnBlur}>
            <img
                src={isExpanded ? xMark : hamburgerIcon}
                alt={"navigation hamburger menu"}
                onClick={OnClick}>
            </img>
            <>
                {isExpanded ? linksVertical : null}
            </>
        </button>
    )
}

interface HeaderLinkProps {
    route: string;
    label: string;
}

function HeaderLink({route, label, children}: PropsWithChildren<HeaderLinkProps>) {
    function GetLinkClasses({isActive}: any): string {
        let classes = "link-text";

        classes = classes.concat(isActive ? " active" : " inactive");

        if (children !== undefined) {
            classes = classes.concat(" non-clickable");
        }

        return classes;
    }
    
    return (
        <div className="link-expandable" tabIndex={0}>
            {children === undefined ? null : <span className={"link-child-indicator"}>&lt;</span>}
            <NavLink to={route} className={GetLinkClasses}>
                {label}
            </NavLink>
            <div className={"link-child-container"}>
                {children}
            </div>
        </div>
    );
}

function HeaderLinks() {
    return (
        <>
            <HeaderLink route={"/"} label={"home"}/>
            <HeaderLink route={"/projects"} label={"projects"}>
                <HeaderLink route={"/projects/scoober-splat"} label={"Scoober Splat"}/>
                <HeaderLink route={"/projects/automagical"} label={"Automagical"}/>
            </HeaderLink>
            <HeaderLink route={"/blog"} label={"blog"}>
                <HeaderLink route={"/blog/job-search-2024"} label={"job search 2024"}/>
            </HeaderLink>
            <HeaderLink route={"/resume"} label={"resume"}/>
            <HeaderLink route={"/contact"} label={"contact"}/>
        </>
    )
}

export default function Header() {
    const header = useRef<HTMLDivElement>(null);
    let location = useLocation();

    useEffect(() => {
        // To scroll page to top and reset focus when changing routes
        header.current?.focus();
        header.current?.blur();
    }, [location]);
    
    return (
        <div className={"Header"} ref={header} tabIndex={0}>
            <Link to="/" className={"Logo"}>
                <img src={fnnbrrLogo} alt={"https://fnnbrr.com"}/>
            </Link>
            
            <div className={"links-horizontal"}>
                <HeaderLinks/>
            </div>
            
            <MenuHamburger>
                <HeaderLinks/>
            </MenuHamburger>
        </div>
    );
}