import React from "react";
import './Header.css'
import { Link, NavLink } from "react-router-dom"

interface HeaderLinkProps {
    route: string;
    label: string;
}

function HeaderLink({route, label}: HeaderLinkProps) {
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
                <text className={"header-link inactive"}>Link 1</text>
                <text className={"header-link inactive"}>Link 2</text>
                <text className={"header-link inactive"}>Link 3</text>
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
            <HeaderLink route={"/automagical"} label={"games"}/>
            <HeaderLink route={"/tools"} label={"tools"}/>
            <HeaderLink route={"/contact"} label={"contact"}/>
        </div>
    );
}