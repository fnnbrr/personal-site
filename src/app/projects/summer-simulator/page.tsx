import "@/Games.css";

export default function SummerSimulator() {
  return (
    <div className={"Game"}>
      <iframe
        className="ItchEmbed"
        title="summer simulator"
        src="https://summer-simulator.pages.dev/"
        allow="fullscreen"
      ></iframe>
    </div>
  );
}
