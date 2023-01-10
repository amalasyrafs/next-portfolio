import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

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
      <main className="mx-5 pt-2">
        <h1
          className={
            "text-4xl font-bold leading-tight lg:text-4xl lg:leading-none"
          }
        >
          hello wolrd
        </h1>
      </main>
    </>
  );
}
