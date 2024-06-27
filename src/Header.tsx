import React, {ReactElement } from "react";
import './Header.css'
import { Link, NavLink } from "react-router-dom"

function MenuHamburger() {
    function OnClick() {
        console.log("hi");
    }
    
    return (
        <img
            src={"hamburger_icon_white.svg"}
            alt={"navigation hamburger menu"}
            className={"hamburger-button"}
            onClick={OnClick}/>
    )
}

interface HeaderLinkProps {
    route: string;
    label: string;
    children?: ReactElement[];
}

function HeaderLink({route, label, children}: HeaderLinkProps) {
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

export default function Header() {
    return (
        <div className={"Header"}>
            <Link to="/" className={"Logo"}>
                <img src={"fnnbrr_logo_outlined_2x.png"} alt={"https://fnnbrr.com"}/>
            </Link>
            
            <HeaderLink route={"/"} label={"home"}/>
            <HeaderLink route={"/resume"} label={"resume"}/>
            <HeaderLink route={"/games"} label={"games"} children={[
                <HeaderLink route={"/games/gunarmed"} label={"gunarmed"} key={"gunarmed"}/>,
                <HeaderLink route={"/games/automagical"} label={"Automagical"} key={"automagical"}/>,
                <HeaderLink route={"/games/scoober-splat"} label={"Scoober Splat"} key={"scoober-splat"}/>
            ]}/>
            <HeaderLink route={"/tools"} label={"tools"}/>
            <HeaderLink route={"/contact"} label={"contact"}/>
            
            <MenuHamburger/>
        </div>
    );
}