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
    route?: string;
    label: string;
}

function HeaderLink({route, label, children}: PropsWithChildren<HeaderLinkProps>) {
    const routeLabel = (
        <NavLink
            to={route === undefined ? "/" : route}
            className={({isActive}) =>
                isActive ? "link-text active" : "link-text inactive"
            }
        >
            {label}
        </NavLink>
    );

    const parentLabel = (
        <span className={"link-text inactive parent-label"}>
            {label}
        </span>
    );
    
    return (
        <div className="link-expandable" tabIndex={0}>
            {children === undefined ? null : <span className={"link-child-indicator"}>&lt;</span>}
            {route === undefined ? parentLabel : routeLabel}
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
            <HeaderLink route={"/resume"} label={"resume"}/>
            <HeaderLink label={"games"}>
                <HeaderLink route={"/games/gunarmed"} label={"gunarmed"} key={"gunarmed"}/>
                <HeaderLink route={"/games/automagical"} label={"Automagical"} key={"automagical"}/>
                <HeaderLink route={"/games/scoober-splat"} label={"Scoober Splat"} key={"scoober-splat"}/>
            </HeaderLink>
            <HeaderLink route={"/tools"} label={"tools"}/>
            <HeaderLink route={"/contact"} label={"contact"}/>
        </>
    )
}

export default function Header() {
    return (
        <div className={"Header"}>
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