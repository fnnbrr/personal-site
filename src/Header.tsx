import React from "react";
import './Header.css'
import { Link } from "react-router-dom"

export default function Header() {
    return (
        <div className={"Header"}>
            <Link to="/">
                <img src={"fnnbrr_logo_outlined_2x.png"} alt={"https://fnnbrr.com"} className={"Logo"}/>
            </Link>
            <Link to="/">home</Link>
            <Link to="/">resume</Link>
            <Link to="/automagical">games</Link>
            <Link to="/">tools</Link>
            <Link to="/">contact</Link>
        </div>
    );
}