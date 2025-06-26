import React from "react";
import "@/Root.css";
import "@/Home.css";
import headshot from "../../public/headshot.png";

export default function Home() {
  return (
    <div className={"Root-header Home"}>
      <div className={"heading"}>
        <h3>
          Finnbarr
          <br />
          O&apos;Callahan
        </h3>
        <img src={headshot.src} className={"headshot"} alt={"headshot"} />
      </div>
      <ul>
        <li>software engineer in Toronto, Canada</li>
        <li>former game studio co-founder and tech lead</li>
        <li>
          interested in building tech that supports education, privacy, and
          sustainability
        </li>
      </ul>
    </div>
  );
}
