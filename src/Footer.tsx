import React from "react";
import './Footer.css'

interface SocialIconProps {
    iconUrl: string;
    redirectUrl: string;
}

function SocialIcon({iconUrl, redirectUrl}: SocialIconProps) {
    return (
        <a href={redirectUrl}>
            <img src={iconUrl} alt={redirectUrl} className={"SocialButtonImg"}/>
        </a>
    )
}

function Footer() {
    return (
        <div className="Footer">
            <div>
                <text>made by <a href="https://fnnbrr.com">fnnbrr</a></text>
                <br/>
                <text>© 2024</text>
            </div>
            <div className={"SocialButtonContainer"}>
                <SocialIcon
                    iconUrl={"logo192.png"}
                    redirectUrl={"https://google.com"}/>
                <SocialIcon
                    iconUrl={"logo192.png"}
                    redirectUrl={"https://google.com"}/>
                <SocialIcon
                    iconUrl={"logo192.png"}
                    redirectUrl={"https://google.com"}/>
            </div>
            
        </div>
    );
}

export default Footer;