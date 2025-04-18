import React from "react";
import "./Footer.css";
import emailIcon from "./assets/email-12-128.png";
import linkedInIcon from "./assets/In-White-128.png";
import githubIcon from "./assets/github-mark-white.svg";
import Link from "next/link";

interface SocialIconProps {
  iconUrl: string;
  redirectUrl: string;
}

function SocialIcon({ iconUrl, redirectUrl }: SocialIconProps) {
  return (
    <a href={redirectUrl} target="_blank" rel={"noreferrer"}>
      <img src={iconUrl} alt={redirectUrl} className={"SocialIconImage"} />
    </a>
  );
}

export default function Footer() {
  return (
    <div className="Footer">
      <div className={"FooterLinks flex-non-centered"}>
        <a
          href={"https://github.com/fnnbrr/personal-site"}
          target="_blank"
          rel={"noreferrer"}
        >
          source code
        </a>
      </div>
      <div className={"flex-centered"}>
        <p>
          made by <Link href="/">fnnbrr</Link>
        </p>
        <p>© 2024</p>
      </div>
      <div className={"SocialIconContainer flex-non-centered"}>
        <SocialIcon
          iconUrl={emailIcon}
          redirectUrl={"mailto:fnnbrr.dev@gmail.com"}
        />
        <SocialIcon
          iconUrl={linkedInIcon}
          redirectUrl={"https://www.linkedin.com/in/finnbarrocallahan/"}
        />
        <SocialIcon
          iconUrl={githubIcon}
          redirectUrl={"https://github.com/fnnbrr"}
        />
      </div>
    </div>
  );
}
