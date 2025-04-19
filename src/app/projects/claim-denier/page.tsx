import React from "react";
import "@/Games.css";

export default function ClaimDenier() {
  return (
    <div className={"Game"}>
      <iframe
        className="ItchEmbed"
        title="Health Insurance Claim Denier"
        src="https://claim-denier.pages.dev"
        allow="fullscreen"
      ></iframe>
    </div>
  );
}
