import React, { useState, PropsWithChildren } from "react";
import './Header.css'
import { Link, NavLink } from "react-router-dom"

function MenuHamburger({children}: PropsWithChildren) {
    const [isExpanded, setIsExpanded] = useState<boolean>(false);
    
    function OnClick(): void {
        setIsExpanded(!isExpanded);
    }
    
    const linksVertical = (
        <div className={"dropdown-list links-vertical"}>
            {children}
        </div>
    );
    
    return (
        <div className={"hamburger-button"}>
            <img
                src={isExpanded ? "x-mark.svg" : "hamburger_icon_white.svg"}
                alt={"navigation hamburger menu"}
                onClick={OnClick}>
            </img>
            <>
                {isExpanded ? linksVertical : null}
            </>
        </div>
    )
}

interface HeaderLinkProps {
    route: string;
    label: string;
}

function HeaderLink({route, label, children}: PropsWithChildren<HeaderLinkProps>) {
    return (
        <div className="link-dropdown">
            <NavLink
                to={route}
                className={({isActive}) =>
                    isActive ? "header-link active" : "header-link inactive"
                }
            >
                {label}
            </NavLink>
            <div className={"dropdown-list"}>
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
            <HeaderLink route={"/games"} label={"games"}>
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
                <img src={"fnnbrr_logo_outlined_2x.png"} alt={"https://fnnbrr.com"}/>
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