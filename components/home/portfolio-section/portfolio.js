import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useIsomorphicLayoutEffect } from "@/hooks/useIsomorphicLayoutEffect";

gsap.registerPlugin(ScrollTrigger);

export default function Portfolio() {
  const main = useRef();

  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context((self) => {
      const boxes = self.selector(".box");
      // console.log(boxes);

      const container = self.selector(".box-container")[0];
      console.log(container);
      gsap.to(container, {
        // backgroundColor: "red",
        scrollTrigger: {
          trigger: container,
          start: "top center",
          end: "+=250",
          scrub: 2,
        },
      });

      boxes.forEach((box, index) => {
        gsap.to(box, {
          x: index % 2 === 0 ? 250 : -250,
          // opacity: index === 4 && 0,
          // scale: index === 4 && "100%",
          // translateY: index === 4 ? "350%" : "290%",
          scrollTrigger: {
            trigger: container,
            start: `top ${index * 10 + 600}px`,
            end: "+=600",
            scrub: true,
          },
        });
      });
    }, main);
    return () => ctx.revert();
  }, []);

  return (
    <div className="max-h-screen py-4" ref={main}>
      <div className="box-container">
        <div className="box sticky top-4 h-[80vh] w-full -translate-y-[20%] scale-[60%] rounded-xl bg-invoke-blue"></div>
        <div className="box sticky top-4 h-[80vh] w-full -translate-y-[110%] scale-[65%] rounded-xl bg-invoke-brown"></div>
        <div className="box sticky top-4 h-[80vh] w-full -translate-y-[200%] scale-[70%] rounded-xl bg-invoke-maroon"></div>
        <div className="box sticky top-4 h-[80vh] w-full -translate-y-[290%] scale-[75%] rounded-xl bg-invoke-decoris"></div>
        <div className="box sticky top-4 h-[80vh] w-full -translate-y-[380%] scale-[80%] rounded-xl bg-invoke-meniaga"></div>
      </div>
    </div>
  );
}
