import Head from "next/head";
import Image from "next/image";
import { AiOutlineArrowDown, AiOutlineArrowRight } from "react-icons/ai";
import { RxArrowTopRight } from "react-icons/rx";
import IconBg from "@/components/iconBg";
import ProfileImage from "@/assets/images/invokeProfile.jpg";

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
        {/* Left card */}
        <div className="flex w-1/4 flex-col justify-center">
          <div className="rounded-3xl bg-invoke-white text-invoke-textBlack shadow-lg shadow-invoke-blue/40">
            <div className="flex items-center gap-2 px-8 pt-8">
              <IconBg containerStyle={"w-5 h-5 border-invoke-textBlack"}>
                <AiOutlineArrowRight
                  className="text-invoke-bgBlack"
                  size={10}
                />
              </IconBg>
              <h3 className="text-xs">Explore a 14-days free trial</h3>
            </div>

            <div className="p-8">
              <h1 className="font-sans text-5xl text-invoke-textBlack text-opacity-80">
                Financial <br /> <strong>Tracking Platform</strong>
              </h1>
            </div>

            <div className="px-8 pb-8">
              <p className="font-sans text-xs text-invoke-textBlack text-opacity-80">
                Financilux NFT Broker consulting services - <br />
                Digital ART needs the top-end technologies and <br />
                consulting.
              </p>
            </div>

            <div className="flex items-center justify-between px-8 pb-8">
              <a className="font-sans text-xs font-bold text-invoke-textBlack text-opacity-80">
                www.github.com/amalasyrafs
              </a>
              <IconBg
                containerStyle={
                  "w-[40px] h-[40px] bg-[#f3501a] border-[#f3501a] hover:shadow-md hover:shadow-invoke-brown"
                }
              >
                <RxArrowTopRight className=" text-white" size={28} />
              </IconBg>
            </div>
          </div>
        </div>
        {/* Middle card */}
        <div className="w-1/4 overflow-hidden rounded-3xl bg-invoke-white">
          <div className="flex bg-[#f3501a] ">
            <h3 className="w-5/6 rounded-br-3xl bg-invoke-white p-8 font-sans text-3xl text-invoke-textBlack">
              The Chinese <br /> <strong>fintech festival</strong>
            </h3>
            <div className="w-1/6 rounded-bl-3xl bg-invoke-white" />
          </div>
          <div className="relative p-8">
            <div className="absolute top-0 right-0 h-px w-full bg-gradient-to-r from-invoke-textBlack/0 to-invoke-textBlack/60" />
            <h1 className="font-sans text-7xl text-invoke-textBlack text-opacity-80">
              Amal
              <br /> <strong>Asyrafs</strong>
            </h1>
          </div>
          <div className="flex">
            <div className="relative flex w-5/6 flex-col gap-4 rounded-md p-8">
              <div className="absolute top-0 right-6 h-px w-[calc(45%_-_16px)] bg-gradient-to-r from-invoke-textBlack/0 to-invoke-textBlack/10" />
              <div className="absolute top-0 right-0 h-6 w-6 rounded-tr-full border-t border-r border-invoke-bgBlack/10" />
              <div className="absolute top-6 right-0 h-[calc(50%_-_24px)] w-px bg-gradient-to-b from-invoke-textBlack/10 to-invoke-textBlack/60" />
              <IconBg containerStyle={"absolute top-1/4 -right-3"}>
                <AiOutlineArrowDown className="text-invoke-bgBlack" size={14} />
              </IconBg>

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
        {/* Right card */}
        <div className="relative flex w-1/4 flex-col justify-center">
          <div className="absolute -top-[10vh] left-[calc(50%_-_24px)] z-10 flex h-36 w-12 flex-col gap-1 rounded-sm bg-[#f3501a] p-1">
            {[50, 50, 50, 50, 50, 50, 30, 30, 30, 30, 20, 20].map((el) => (
              <div className={`h-2 w-full rounded-md bg-white/${el}`} />
            ))}
          </div>
          <div className="relative rounded-3xl bg-invoke-white px-8 pb-4 text-invoke-textBlack">
            <div className="flex w-full items-center justify-center border-b border-b-invoke-bgBlack/80 py-4">
              <div className="h-3 w-20 rounded-full bg-invoke-bgBlack" />
            </div>
            <div className="flex w-full items-center justify-center gap-[1px] bg-invoke-bgBlack pt-[0.5px]">
              <div className="flex h-full w-full rounded-tr-xl bg-invoke-white p-2">
                <p>Amaluddin A.</p>
              </div>
              <div className="flex w-full justify-center rounded-tl-xl bg-invoke-white p-2">
                <p>FE-dev</p>
              </div>
            </div>
            <div className="relative py-4">
              <div className="absolute top-0 right-2 h-px w-[calc(60%_-_16px)] bg-gradient-to-r from-invoke-textBlack/0 via-invoke-textBlack/60 to-invoke-textBlack/10" />
              <div className="absolute top-0 -right-4 h-6 w-6 rounded-tr-full border-t border-r border-invoke-bgBlack/10" />

              {/* Image div */}
              <div className="relative flex max-h-[380px] w-full justify-center overflow-hidden rounded-[20px]">
                <Image
                  src={ProfileImage}
                  alt="Amaluddin Asyraf"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
          <div className="-mt-4 h-8 w-[calc(100%_-_80px)] self-center rounded-bl-full rounded-br-full bg-invoke-bgBlack/50" />
        </div>
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
