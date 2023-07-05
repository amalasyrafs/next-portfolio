import { useEffect, useRef } from "react";
import useOnScreen from "@/hooks/useOnScreen";
import Portfolio from "./portfolio";

export default function PortfolioSection({ setSection }) {
  const ref = useRef(null);
  const isVisible = useOnScreen(ref);

  useEffect(() => {
    if (isVisible) {
      setSection(1);
    }
  }, [isVisible]);

  return (
    <section
      ref={ref}
      id="section-1"
      className="h-full min-h-screen w-full  bg-invoke-bgBlack p-8"
      style={{
        backgroundImage:
          "radial-gradient(rgba(255, 255, 255, 0.25) 0.5px, transparent 0)",
        backgroundo: 0.2,
        backgroundSize: "30px 30px",
        backgroundPosition: "-19px -19px",
      }}
    >
      <div className="m-auto max-w-4xl overflow-visible">
        <h1
          className={
            "font-raleway text-4xl font-bold leading-tight lg:text-4xl lg:leading-none"
          }
        >
          Works
        </h1>
        <p className={"py-2 font-sans text-sm"}>
          Selected works that I have worked on:
        </p>

        <Portfolio />
      </div>
    </section>
  );
}
