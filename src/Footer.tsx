import React from "react";
import './Footer.css'

interface SocialIconProps {
    iconUrl: string;
    redirectUrl: string;
}

function SocialIcon({iconUrl, redirectUrl}: SocialIconProps) {
    return (
        <a href={redirectUrl}>
            <img src={iconUrl} alt={redirectUrl} className={"SocialIconImage"}/>
        </a>
    )
}

function Footer() {
    return (
        <div className="Footer">
            <div className={"SiteMapContainer"}>
                <a href="https://fnnbrr.com">home</a>
                <text>|</text>
                <a href="https://fnnbrr.com">wip</a>
                <text>|</text>
                <a href="https://fnnbrr.com">wip</a>
            </div>
            <div>
                <text>made by <a href="https://fnnbrr.com">fnnbrr</a></text>
                <br/>
                <text>© 2024</text>
            </div>
            <div className={"SocialIconContainer"}>
                <SocialIcon
                    iconUrl={"social-icons/email-12-128.png"}
                    redirectUrl={"mailto:fnnbrr.dev@gmail.com"}/>
                <SocialIcon
                    iconUrl={"social-icons/In-White-128.png"}
                    redirectUrl={"https://www.linkedin.com/in/finnbarrocallahan/"}/>
                <SocialIcon
                    iconUrl={"social-icons/github-mark-white.svg"}
                    redirectUrl={"https://github.com/fnnbrr"}/>
            </div>
        </div>
    );
}

export default Footer;