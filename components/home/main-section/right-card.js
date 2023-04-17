import Image from "next/image";
import ProfileImage from "@/assets/images/invokeProfile.jpg";

export default function RightCard() {
  return (
    // Right card
    <div className="relative flex w-1/4 flex-col justify-center">
      <div className="bg-invoke-orange absolute -top-[10vh] left-[calc(50%_-_24px)] z-10 flex h-36 w-12 flex-col gap-1 rounded-sm p-1">
        {[
          "bg-white/50",
          "bg-white/50",
          "bg-white/50",
          "bg-white/50",
          "bg-white/50",
          "bg-white/50",
          "bg-white/30",
          "bg-white/30",
          "bg-white/30",
          "bg-white/30",
          "bg-white/20",
          "bg-white/20",
        ].map((el, index) => (
          <div key={index} className={`h-2 w-full rounded-md ${el}`} />
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
  );
}
