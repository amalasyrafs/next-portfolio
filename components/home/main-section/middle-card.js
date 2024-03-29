import { AiOutlineArrowDown } from "react-icons/ai";
import IconBg from "@/components/general/iconBg";

export default function MiddleCard() {
  return (
    //  Middle card
    <div className="w-1/3 overflow-hidden rounded-[28px] bg-invoke-yellowGreen">
      <div className="flex bg-invoke-orange ">
        <h3 className="w-5/6 rounded-br-3xl bg-invoke-yellowGreen p-8 font-sans text-3xl text-invoke-textBlack">
          Hello, <br /> <strong>world</strong>
        </h3>
        <div className="w-1/6 rounded-bl-3xl bg-invoke-yellowGreen" />
      </div>
      <div className="relative p-8">
        <div className="absolute right-0 top-0 h-px w-full bg-gradient-to-r from-invoke-textBlack/0 to-invoke-textBlack/60" />
        <h1 className="font-sans text-7xl text-invoke-textBlack text-opacity-80">
          Amal
          <br /> <strong>Asyrafs</strong>
        </h1>
      </div>
      <div className="flex">
        <div className="relative flex w-5/6 flex-col gap-4 rounded-md p-8">
          <div className="absolute right-6 top-0 h-px w-[calc(45%_-_16px)] bg-gradient-to-r from-invoke-textBlack/0 to-invoke-textBlack/10" />
          <div className="absolute right-0 top-0 h-6 w-6 rounded-tr-full border-r border-t border-invoke-bgBlack/10" />
          <div className="absolute right-0 top-6 h-[calc(50%_-_24px)] w-px bg-gradient-to-b from-invoke-textBlack/10 to-invoke-textBlack/60" />
          <IconBg containerStyle={"absolute top-1/4 -right-3 bg-white"}>
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
          <div className="absolute -left-[1px] bottom-[calc(50%_-_24px)] h-6 w-6 rounded-bl-full border-b border-l border-invoke-bgBlack/50" />
          <div className="absolute bottom-[calc(50%_-_24px)] left-[23px] h-px w-[calc(100%_-_24px)] bg-gradient-to-r from-invoke-textBlack/60 to-invoke-textBlack/60" />
        </div>
      </div>
      <div className="h-12 w-full"></div>
    </div>
  );
}
