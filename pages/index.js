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
      <section className="flex h-full min-h-screen w-full items-stretch justify-evenly gap-4 bg-invoke-bgBlack py-[10vh]">
        <LeftCard />
        <MiddleCard />
        <RightCard />
      </section>
      <section className="h-full min-h-screen w-full bg-red-50">
        <h1
          className={
            "font-raleway text-4xl font-bold leading-tight lg:text-4xl lg:leading-none"
          }
        >
          Sarah Dayan 2
        </h1>
      </section>
    </>
  );
}
