import Head from "next/head";

// Local import
import LeftCard from "@/components/home/main-section/left-card";
import MiddleCard from "@/components/home/main-section/middle-card";
import RightCard from "@/components/home/main-section/right-card";

export default function Home() {
  return (
    <>
      <Head>
        <title>Amaluddin Asyraf | Hello World</title>
        <meta
          name="description"
          content="Muhammad Amaluddin Asyraf, front-end engineer"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section
        className="flex h-full min-h-screen w-full items-stretch justify-evenly gap-4 bg-invoke-bgBlack bg-opacity-50 py-[10vh]"
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
      <section
        className="h-full min-h-screen w-full bg-invoke-bgBlack p-8"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255, 255, 255, 0.25) 0.5px, transparent 0)",
          backgroundo: 0.2,
          backgroundSize: "30px 30px",
          backgroundPosition: "-19px -19px",
        }}
      >
        <div className="m-auto max-w-5xl">
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
        </div>
      </section>
      <section
        className="h-full min-h-screen w-full bg-invoke-bgBlack"
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
                "-webkit-background-clip": "text",
                "-webkit-text-fill-color": "transparent",
              }}
            >
              Let's collaborate
            </p>
            <h1
              className={
                " text-center font-raleway text-6xl font-semibold leading-[65px]"
              }
              style={{
                background: "-webkit-linear-gradient(#eee, #333)",
                "-webkit-background-clip": "text",
                "-webkit-text-fill-color": "transparent",
              }}
            >
              Tell me about your
              <br /> next project
            </h1>
          </div>
          <div className="my-10 h-[0.5px] w-full bg-invoke-white bg-opacity-25" />
        </div>
      </section>
    </>
  );
}
