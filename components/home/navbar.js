import { useState } from "react";
import { useLenis } from "@studio-freight/react-lenis";
import { Switch } from "@headlessui/react";
import { BsMoonFill, BsSunFill } from "react-icons/bs";

export default function VerticalNavbar({ section }) {
  const lenis = useLenis();
  const [enabled, setEnabled] = useState(false);

  return (
    <div className="fixed right-5 top-[40%] flex flex-col items-center justify-center gap-2">
      <div>{enabled ? <BsMoonFill /> : <BsSunFill />}</div>
      <Switch
        checked={enabled}
        onChange={setEnabled}
        className={`${
          enabled ? "bg-invoke-orange" : "bg-invoke-darkGrey"
        } relative mb-6 mt-4 inline-flex h-6 w-11 rotate-90 items-center rounded-full`}
      >
        <span className="sr-only">Dark mode</span>
        <span
          className={`${
            enabled ? "translate-x-6" : "translate-x-1"
          } h-4 w-4 transform rounded-full bg-white transition`}
        />
      </Switch>
      {[0, 1, 2].map((el) => (
        <div
          onClick={() =>
            lenis?.scrollTo(`#section-${el}`, {
              duration: 1.5,
              lock: true,
            })
          }
          href={`#section-${el}`}
          className={`h-4 w-4 cursor-pointer rounded-full ${
            el === section ? "bg-invoke-orange" : "bg-invoke-brown/40"
          }`}
        ></div>
      ))}
    </div>
  );
}
