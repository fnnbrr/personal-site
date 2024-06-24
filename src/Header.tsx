import React, {ReactElement } from "react";
import './Header.css'
import { Link, NavLink } from "react-router-dom"
import GetRouteDisplayData from "./routes/RoutesDisplayData";

interface HeaderLinkProps {
    route: string;
    children?: ReactElement[];
}

function HeaderLink({route, children}: HeaderLinkProps) {
    return (
        <div className="link-dropdown">
            <NavLink
                to={route}
                className={({isActive}) =>
                    isActive ? "header-link active" : "header-link inactive"
                }
            >
                {GetRouteDisplayData(route).label}
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
            
            <HeaderLink route={"/"}/>
            <HeaderLink route={"/resume"}/>
            <HeaderLink route={"/games"} children={[
                <HeaderLink route={"/games/gunarmed"} key={"gunarmed"}/>,
                <HeaderLink route={"/games/automagical"} key={"automagical"}/>,
                <HeaderLink route={"/games/scoober-splat"} key={"scoober-splat"}/>
            ]}/>
            <HeaderLink route={"/tools"}/>
            <HeaderLink route={"/contact"}/>
        </div>
    );
}