import React from "react";
import "@/Root.css";
import "@/Home.css";
import headshot from "../../public/headshot.png";

export default function Home() {
  return (
    <div className={"Root-header Home"}>
      <div className={"heading"}>
        <p>
          Finnbarr
          <br />
          O&apos;Callahan
        </p>
        <img src={headshot.src} className={"headshot"} alt={"headshot"} />
      </div>
      <ul>
        <li>software engineer in Toronto, Canada</li>
        <li>
          Unity Developer at Sago Mini, previously co-founder and lead developer
          of an indie game studio
        </li>
        <li>
          interested in building tech that supports education and freedom of
          information
        </li>
      </ul>
    </div>
  );
}
