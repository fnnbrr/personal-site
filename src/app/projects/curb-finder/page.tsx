import React from "react";
import "@/Games.css";

export default function CurbFinder() {
  return (
    <div className={"Game"}>
      <iframe
        className="ItchEmbed"
        title="CurbFinder"
        src="https://curb-finder.pages.dev?demo"
        allow="geolocation; camera; clipboard-write"
      ></iframe>
    </div>
  );
}
