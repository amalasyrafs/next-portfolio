import { useEffect, useRef } from "react";
import useOnScreen from "@/hooks/useOnScreen";
import LeftCard from "../main-section/left-card";
import MiddleCard from "../main-section/middle-card";
import RightCard from "../main-section/right-card";

export default function ContactUsSection({ setSection }) {
  const ref = useRef(null);
  const isVisible = useOnScreen(ref, "0px", 0.45);

  useEffect(() => {
    if (isVisible) {
      setSection(2);
    }
  }, [isVisible]);

  return (
    <section
      ref={ref}
      id="section-2"
      className="relative h-full min-h-screen w-full overflow-hidden bg-invoke-bgBlack"
      style={{
        backgroundImage:
          "radial-gradient(rgba(255, 255, 255, 0.25) 0.5px, transparent 0)",
        backgroundSize: "30px 30px",
        backgroundPosition: "-19px -19px",
      }}
    >
      <div className="m-auto flex h-screen max-w-5xl flex-col items-center justify-evenly p-8">
        <div className="my-10 h-[0.5px] w-full bg-invoke-white bg-opacity-25" />
        <div className="flex flex-col items-center justify-center py-8">
          <p
            className={" text-center font-raleway text-xl font-semibold"}
            style={{
              background: "-webkit-linear-gradient(#eee, #333)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Let's collaborate
          </p>
          <h1
            className={
              "text-center font-raleway text-6xl font-semibold leading-[65px]"
            }
            style={{
              background: "-webkit-linear-gradient(#eee, #333)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Tell me about your
            <br /> next project
          </h1>
        </div>
        <div className="my-10 h-[0.5px] w-full bg-invoke-white bg-opacity-25" />
      </div>
      <div
        className="flex h-full min-h-screen w-full items-stretch justify-evenly gap-4 bg-invoke-bgBlack bg-opacity-50 p-[10vh]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255, 255, 255, 0.25) 0.5px, transparent 0)",
          backgroundo: 0.2,
          backgroundSize: "30px 30px",
          backgroundPosition: "-19px -19px",
        }}
      >
        <LeftCard />
        <MiddleCard />
        <RightCard extended={true} />
      </div>
    </section>
  );
}
