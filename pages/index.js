import Head from "next/head";
import Image from "next/image";
import { AiOutlineArrowDown } from "react-icons/ai";

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
      <section className="bg-invoke-brown flex h-full min-h-screen w-full items-center justify-evenly gap-4">
        <div className="w-1/4 ">hihi</div>
        {/* Middle card */}
        <div className="w-1/4 rounded-3xl bg-invoke-white">
          <div className="border-b border-invoke-textBlack/50 p-8">
            <h3 className="font-sans text-3xl text-invoke-textBlack">
              The Chinese <br /> <strong>fintech festival</strong>
            </h3>
          </div>
          <div className="p-8">
            <h1 className="font-sans text-7xl text-invoke-textBlack text-opacity-80">
              NFT - <br /> <strong>broker</strong>
            </h1>
          </div>
          <div className="flex">
            <div className="relative flex w-full flex-col gap-4 rounded-md p-8">
              <div className="absolute top-0 right-6 h-px w-[calc(45%_-_16px)] bg-gradient-to-r from-invoke-textBlack/0 to-invoke-textBlack/10" />
              <div className="absolute top-0 right-0 h-6 w-6 rounded-tr-full border-t border-r border-invoke-bgBlack/10" />
              <div className="absolute top-6 right-0 h-[calc(50%_-_24px)] w-px bg-gradient-to-b from-invoke-textBlack/10 to-invoke-textBlack/60" />
              <div className="absolute top-1/4 -right-3 flex h-6 w-6 items-center justify-center rounded-full border border-invoke-bgBlack/60 bg-white">
                <AiOutlineArrowDown className="text-invoke-bgBlack" size={14} />
              </div>

              <div className="flex flex-col">
                <h6 className="font-sans text-invoke-textBlack text-opacity-75">
                  For artists
                </h6>
                <p className="font-sans text-xs text-invoke-darkGrey">
                  For artists - the creation and sales of collection
                </p>
              </div>
              <div className="flex flex-col">
                <h6 className="font-sans text-invoke-textBlack text-opacity-75">
                  For collectors
                </h6>
                <p className="font-sans text-xs text-invoke-darkGrey">
                  For collectors - services for the selection of collection and
                  support of transactions
                </p>
              </div>
            </div>
            <div className="relative w-1/6">
              <div className="absolute bottom-[calc(50%_-_24px)] -left-[1px] h-6 w-6 rounded-bl-full border-b border-l border-invoke-bgBlack/50" />
              <div className="absolute bottom-[calc(50%_-_24px)] left-[23px] h-px w-[calc(100%_-_24px)] bg-gradient-to-r from-invoke-textBlack/60 to-invoke-textBlack/60" />
            </div>
          </div>
          <div className="h-12 w-full"></div>
        </div>
        <div className="w-1/4 ">hihi</div>
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
