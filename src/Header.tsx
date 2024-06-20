import React from "react";
import './Header.css'

export default function Header() {
    return (
        <div className={"Header"}>
            <a href={"https://fnnbrr.com"}>
                <img src={"fnnbrr_logo_outlined_2x.png"} alt={"https://fnnbrr.com"} className={"Logo"}/>
            </a>
            <a href="https://fnnbrr.com">home</a>
            <a href="https://fnnbrr.com">resume</a>
            <a href="https://fnnbrr.com">games</a>
            <a href="https://fnnbrr.com">tools</a>
            <a href="https://fnnbrr.com">contact</a>
        </div>
    );
}