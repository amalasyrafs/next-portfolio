import Image from "next/image";
import ProfileImage from "@/assets/images/invokeProfile.jpg";
import { classConcatenator } from "@/helpers/classConcatenator";
import useWindowHeight from "@/hooks/useWindowHeight";
import { useEffect, useRef, useState } from "react";

const getBarOpacity = (currentBar, arrLength) => {
  const fraction = currentBar / arrLength;
  if (fraction <= 0.1) {
    return 0.6;
  } else if (fraction > 0.1 && fraction <= 0.2) {
    return 0.55;
  } else if (fraction > 0.2 && fraction <= 0.3) {
    return 0.5;
  } else if (fraction > 0.3 && fraction <= 0.4) {
    return 0.45;
  } else if (fraction > 0.4 && fraction <= 0.5) {
    return 0.4;
  } else if (fraction > 0.5 && fraction <= 0.75) {
    return 0.3;
  } else if (fraction > 0.75 && fraction <= 1) {
    return 0.2;
  } else {
    return 0.2;
  }
};

export default function RightCard({ extended }) {
  const windowHeight = useWindowHeight();
  const [barHeight, setBarHeight] = useState(244);
  const [barArr, setBarArr] = useState(new Array(20).fill(1));
  const [barHeightExt, setBarHeightExt] = useState(559);
  const [barArrExt, setBarArrExt] = useState(new Array(40).fill(1));
  const divRef = useRef(null);

  useEffect(() => {
    const barHeight = (windowHeight - divRef.current.clientHeight + 40) / 2;
    const arrLength = Math.floor(barHeight / 12);
    const arrLengthExt = Math.floor((barHeight + 335) / 12);
    setBarHeight(barHeight);
    setBarArr(new Array(arrLength).fill(1));
    setBarHeightExt(barHeight + 335);
    setBarArrExt(new Array(arrLengthExt).fill(1));
  }, [windowHeight]);
  return (
    // Right card
    <div className="relative flex w-1/4 flex-col justify-center">
      <div
        className={classConcatenator(
          "absolute left-[calc(50%_-_24px)] z-10 flex w-12 flex-col gap-1 rounded-sm bg-invoke-orange p-1",
          extended ? "-top-[428px] rounded-t-md" : "-top-[10vh] h-36 "
        )}
        style={{
          height: extended ? barHeightExt : barHeight,
        }}
      >
        {extended
          ? barArrExt.map((el, index, arr) => (
              <div
                style={{
                  backgroundColor: "white",
                  opacity: getBarOpacity(index + 1, arr.length),
                }}
                key={index}
                className={`h-2 w-full rounded-md`}
              />
            ))
          : barArr.map((el, index) => (
              <div
                style={{
                  backgroundColor: "white",
                  opacity: 0.2,
                }}
                key={index}
                className={`h-2 w-full rounded-md`}
              />
            ))}
      </div>
      <div
        ref={divRef}
        className="relative rounded-[40px] bg-invoke-white px-8 pb-4 text-invoke-textBlack"
      >
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
          <div className="absolute right-2 top-0 h-px w-[calc(60%_-_16px)] bg-gradient-to-r from-invoke-textBlack/0 via-invoke-textBlack/60 to-invoke-textBlack/10" />
          <div className="absolute -right-4 top-0 h-6 w-6 rounded-tr-full border-r border-t border-invoke-bgBlack/10" />

          {/* Image div */}
          <div className="relative flex max-h-[380px] w-full justify-center overflow-hidden rounded-[20px]">
            <Image
              src={ProfileImage}
              alt="Amaluddin Asyraf"
              className="object-cover"
              priority={true}
            />
          </div>
        </div>
      </div>
      <div className="-mt-4 h-8 w-[calc(100%_-_80px)] self-center rounded-bl-full rounded-br-full bg-invoke-bgBlack/50" />
    </div>
  );
}
