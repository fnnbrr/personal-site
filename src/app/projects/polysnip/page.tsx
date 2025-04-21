import React from "react";
import "@/Games.css";

export default function Polysnip() {
  return (
    <div className={"Game"}>
      <iframe
        className="ItchEmbed"
        title="polysnip"
        src="https://polysnip.pages.dev"
        allow="fullscreen"
      ></iframe>
    </div>
  );
}
