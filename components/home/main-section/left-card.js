import { AiOutlineArrowRight } from "react-icons/ai";
import { RxArrowTopRight } from "react-icons/rx";
import IconBg from "@/components/general/iconBg";

export default function LeftCard() {
  return (
    // Left card
    <div className="flex w-1/4 flex-col justify-center">
      <div className="rounded-[40px] bg-invoke-yellowGreen text-invoke-textBlack shadow-lg shadow-invoke-blue/40">
        <div className="flex items-center gap-2 px-8 pt-8">
          <IconBg containerStyle={"w-5 h-5 border-invoke-textBlack"}>
            <AiOutlineArrowRight className="text-invoke-bgBlack" size={10} />
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
              "w-[40px] h-[40px] bg-invoke-orange border-invoke-orange hover:shadow-md hover:shadow-invoke-brown"
            }
          >
            <RxArrowTopRight className=" text-white" size={28} />
          </IconBg>
        </div>
      </div>
    </div>
  );
}
