import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useIsomorphicLayoutEffect } from "@/hooks/useIsomorphicLayoutEffect";

gsap.registerPlugin(ScrollTrigger);

export default function Portfolio() {
  const awardsRef = useRef();
  const containerRef = useRef();
  const childRefs = useRef([]);

  useIsomorphicLayoutEffect(() => {
    // const ctx = gsap.context((self) => {
    //   const boxes = self.selector(".box");
    //   // console.log(boxes);

    //   const container = self.selector(".box-container")[0];
    //   console.log(container);
    //   // gsap.to(container, {
    //   //   backgroundColor: "red",

    //   //   scrollTrigger: {
    //   //     trigger: container,
    //   //     start: "top center",
    //   //     end: "+=250",
    //   //     scrub: true,
    //   //   },
    //   // });

    //   boxes.forEach((box, index) => {
    //     gsap.to(box, {
    //       x: index % 2 === 0 ? 250 : -250,
    //       // opacity: index === 4 && 0,
    //       // scale: index === 4 && "100%",
    //       // translateY: index === 4 ? "350%" : "290%",
    //       scrollTrigger: {
    //         trigger: container,
    //         start: `top ${index * 10 + 600}px`,
    //         end: "+=600",
    //         scrub: true,
    //       },
    //     });
    //   });
    // }, main);
    // return () => ctx.revert();

    const containerTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top center",
        end: "center center",
        scrub: true,
        markers: true, // Remove this in production
      },
    });

    // Create timeline for children animation
    const childrenTimeline = gsap.timeline({
      paused: true,
    });

    // Add animations to container timeline
    containerTimeline.to(containerRef.current, {
      // opacity: 0,
      // xPercent: 10,
    });
    // Play children timeline when container timeline is complete

    // Add animations to children timeline
    childRefs.current.forEach((ref) => {
      childrenTimeline.to(ref.current, {
        // Add your animation for the children elements
        opacity: 0,
      });
    });

    // Set up ScrollTrigger for children timeline
    ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top top",
      end: "top top",
      onEnter: () => {
        containerTimeline.play(); // Play container timeline when user scrolls to center of container
      },
      onLeaveBack: () => {
        containerTimeline.reverse(); // Reverse container timeline when user scrolls back
      },
    });
  }, []);

  return (
    <div className="py-4" ref={awardsRef}>
      <div
        ref={(el) => (childRefs.current[0] = el)}
        className="box sticky top-4 h-[80vh] w-full -translate-y-[20%] scale-[60%] rounded-xl bg-invoke-blue hover:shadow-lg"
      >
        <h1>helloworld</h1>
      </div>
      <div
        ref={(el) => (childRefs.current[1] = el)}
        className="box sticky top-4 h-[80vh] w-full -translate-y-[110%] scale-[65%] rounded-xl bg-invoke-brown hover:shadow-lg"
      >
        <h1>helloworld</h1>
      </div>
      <div
        ref={(el) => (childRefs.current[2] = el)}
        className="box sticky top-4 h-[80vh] w-full -translate-y-[200%] scale-[70%] rounded-xl bg-invoke-maroon hover:shadow-lg"
      >
        <h1>helloworld</h1>
      </div>
      <div
        ref={(el) => (childRefs.current[3] = el)}
        className="box sticky top-4 h-[80vh] w-full -translate-y-[290%] scale-[75%] rounded-xl bg-invoke-decoris hover:shadow-lg"
      >
        <h1>helloworld</h1>
      </div>
      <div
        ref={(el) => (childRefs.current[4] = el)}
        className="box sticky top-4 h-[80vh] w-full -translate-y-[380%] scale-[80%] rounded-xl bg-invoke-meniaga hover:shadow-lg"
      >
        <h1>helloworld</h1>
      </div>
    </div>
  );
}
