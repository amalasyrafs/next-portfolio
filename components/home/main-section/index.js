import { useEffect, useRef } from "react";

// Local import
import LeftCard from "@/components/home/main-section/left-card";
import MiddleCard from "@/components/home/main-section/middle-card";
import RightCard from "@/components/home/main-section/right-card";
import useOnScreen from "@/hooks/useOnScreen";

export default function MainSection({ setSection }) {
  const ref = useRef(null);
  const isVisible = useOnScreen(ref);

  useEffect(() => {
    if (isVisible) {
      setSection(0);
    }
  }, [isVisible]);
  return (
    <section
      ref={ref}
      id="section-0"
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
      <RightCard />
    </section>
  );
}
