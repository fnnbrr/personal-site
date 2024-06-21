import React from "react";
import './Header.css'
import { Link, NavLink } from "react-router-dom"

interface HeaderLinkProps {
    route: string;
    label: string;
}

function HeaderLink({route, label}: HeaderLinkProps) {
    return (
        <NavLink 
            to={route}
            className={({isActive}) =>
                isActive ? "active" : "inactive"
            }
        >
            {label}
        </NavLink>
    );
}

export default function Header() {
    return (
        <div className={"Header"}>
            <Link to="/">
                <img src={"fnnbrr_logo_outlined_2x.png"} alt={"https://fnnbrr.com"} className={"Logo"}/>
            </Link>
            
            <HeaderLink route={"/"} label={"home"}/>
            <HeaderLink route={"/resume"} label={"resume"}/>
            <HeaderLink route={"/automagical"} label={"games"}/>
            <HeaderLink route={"/tools"} label={"tools"}/>
            <HeaderLink route={"/contact"} label={"contact"}/>
        </div>
    );
}