import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useIsomorphicLayoutEffect } from "@/hooks/useIsomorphicLayoutEffect";
import useOnScreen from "@/hooks/useOnScreen";
import Portfolio from "./portfolio";

export default function PortfolioSection({ setSection }) {
  const ref = useRef(null);
  const awardCardsRef = useRef([]);
  const isVisible = useOnScreen(ref);

  useEffect(() => {
    if (isVisible) {
      setSection(1);
    }
  }, [isVisible]);

  // useIsomorphicLayoutEffect(() => {
  //   const awards = ref.current;
  //   const awardCards = awardCardsRef.current;

  //   // Set up initial positions of the cards
  //   gsap.set(awardCards, { y: 100, opacity: 0 });

  //   // Animate each card when it enters the viewport
  //   awardCards.forEach((card, i) => {
  //     ScrollTrigger.create({
  //       trigger: card,
  //       onEnter: () => {
  //         gsap.to(card, {
  //           duration: 0.8,
  //           y: 0,
  //           opacity: 1,
  //           ease: "power3.out",
  //           delay: i * 0.1,
  //         });
  //       },
  //     });
  //   });

  //   // Animate the awards section heading
  //   ScrollTrigger.create({
  //     trigger: awards,
  //     start: "top 80%",
  //     onEnter: () => {
  //       gsap.to(awards.querySelector("h2"), {
  //         duration: 0.5,
  //         opacity: 1,
  //         y: 0,
  //         ease: "power2.out",
  //       });
  //     },
  //   });

  //   // Animate the card container when it enters the viewport
  //   ScrollTrigger.create({
  //     trigger: awards,
  //     start: "top 70%",
  //     end: "bottom 30%",
  //     onEnter: () => {
  //       gsap.to(awardCards, {
  //         duration: 0.8,
  //         y: -100,
  //         opacity: 0,
  //         stagger: 0.1,
  //         ease: "power3.out",
  //       });
  //     },
  //     onLeaveBack: () => {
  //       gsap.to(awardCards, {
  //         duration: 0.8,
  //         y: 0,
  //         opacity: 1,
  //         stagger: 0.1,
  //         ease: "power3.out",
  //       });
  //     },
  //   });
  // }, []);

  return (
    <section
      ref={ref}
      id="section-1"
      className="h-full min-h-screen w-full bg-invoke-bgBlack p-8"
      style={{
        backgroundImage:
          "radial-gradient(rgba(255, 255, 255, 0.25) 0.5px, transparent 0)",
        backgroundo: 0.2,
        backgroundSize: "30px 30px",
        backgroundPosition: "-19px -19px",
      }}
    >
      <div className="m-auto max-w-4xl">
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

        {/* <Portfolio /> */}
        {/* award-cards */}
        {/* <div className="py-4">
          <div
            ref={(el) => (awardCardsRef.current[0] = el)}
            className="box sticky top-4 h-[80vh] w-full -translate-y-[20%] scale-[60%] rounded-xl bg-invoke-blue hover:shadow-lg"
          >
            <h1>helloworld</h1>
          </div>
          <div
            ref={(el) => (awardCardsRef.current[1] = el)}
            className="box sticky top-4 h-[80vh] w-full -translate-y-[110%] scale-[65%] rounded-xl bg-invoke-brown hover:shadow-lg"
          >
            <h1>helloworld</h1>
          </div>
          <div
            ref={(el) => (awardCardsRef.current[2] = el)}
            className="box sticky top-4 h-[80vh] w-full -translate-y-[200%] scale-[70%] rounded-xl bg-invoke-maroon hover:shadow-lg"
          >
            <h1>helloworld</h1>
          </div>
          <div
            ref={(el) => (awardCardsRef.current[3] = el)}
            className="box sticky top-4 h-[80vh] w-full -translate-y-[290%] scale-[75%] rounded-xl bg-invoke-decoris hover:shadow-lg"
          >
            <h1>helloworld</h1>
          </div>
          <div
            ref={(el) => (awardCardsRef.current[4] = el)}
            className="box sticky top-4 h-[80vh] w-full -translate-y-[380%] scale-[80%] rounded-xl bg-invoke-meniaga hover:shadow-lg"
          >
            <h1>helloworld</h1>
          </div>
        </div> */}

        <Portfolio />
      </div>
    </section>
  );
}
