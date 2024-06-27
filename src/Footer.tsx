import React from "react";
import './Footer.css'
import { Link } from "react-router-dom"

interface SocialIconProps {
    iconUrl: string;
    redirectUrl: string;
}

function SocialIcon({iconUrl, redirectUrl}: SocialIconProps) {
    return (
        <a href={redirectUrl} target="_blank" rel={"noreferrer"}>
            <img src={iconUrl} alt={redirectUrl} className={"SocialIconImage"}/>
        </a>
    )
}

export default function Footer() {
    return (
        <div className="Footer">
            <div className={"FooterLinks"}>
                <a href={"https://github.com/fnnbrr/personal-site"} target="_blank" rel={"noreferrer"}>source code</a>
            </div>
            <div>
                <p>made by <Link to="/">fnnbrr</Link></p>
                <p>© 2024</p>
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