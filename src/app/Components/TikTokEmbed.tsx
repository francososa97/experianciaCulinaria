import { useEffect, useRef } from "react";

const TikTokEmbed: React.FC = () =>{
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.tiktok.com/embed.js";
    script.async = true;
    script.onload = () => {
      console.log("TikTok script cargado");
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div ref={containerRef} className="mt-4">
      <blockquote
        className="tiktok-embed"
        cite="https://www.tiktok.com/@francososa692/video/7501877132356783366"
        data-video-id="7501877132356783366"
        style={{ maxWidth: "605px", minWidth: "325px" }}
      >
        <section>
          <a
            target="_blank"
            title="@francososa692"
            href="https://www.tiktok.com/@francososa692?refer=embed"
          >
            @francososa692
          </a>{" "}
          ¿Querés aprender a programar en C# y .NET?
        </section>
      </blockquote>
    </div>
  );
};

export default TikTokEmbed;
