import { useState } from "react";

interface HomeSectionProps {
  bgColor?: string;
}

const HomeSection = ({ bgColor = "bg-white" }: HomeSectionProps) => {
  const [openMenu, setOpenMenu] = useState<Boolean>(false);

  return (
    <div className={`${bgColor} flex flex-col h-screen py-4 snap-center`}>
      <header className="flex justify-between items-center w-full">
        <nav className="flex">
          <h6 className="text-neutral-400">amal</h6>
          <h6 className="text-stone-700">asyrafs</h6>
        </nav>
        <nav
          className={`flex flex-col gap-1 hover:cursor-pointer ${
            openMenu && `-rotate-90`
          } transition-all duration-500`}
          onClick={() => setOpenMenu(!openMenu)}
        >
          <div className="h-1 w-6 bg-neutral-300 rounded" />
          <div className="h-1 w-4 bg-neutral-400 rounded" />
        </nav>
      </header>
      <main className="flex flex-1 flex-row items-center relative">
        <div className="flex flex-col items-center flex-1 gap-1">
          <h2 className="text-stone-700 text-3xl lg:text-5xl">
            I AM Amaluddin Asyraf
          </h2>
          <h6 className="text-neutral-400 text-center">
            I build software solutions using{" "}
            <b className="text-stone-500">React</b>,{" "}
            <b className="text-stone-500"> Next</b> and{" "}
            <b className="text-stone-500">Aws</b>
          </h6>
        </div>
        <div
          className={`absolute right-0 gap-10 flex justify-center h-full transition-all duration-700 ${
            openMenu ? "opacity-100" : "opacity-0"
          }`}
          style={{ writingMode: "vertical-rl" }}
        >
          <h6
            className={`rotate-180 text-stone-500 opacity-40 transition-opacity duration-700 ${
              openMenu
                ? `hover:cursor-pointer hover:opacity-100`
                : `hover:cursor-default`
            }`}
          >
            Home
          </h6>
          <h6
            className={`rotate-180 text-stone-500 opacity-40 transition-opacity duration-700 ${
              openMenu
                ? `hover:cursor-pointer hover:opacity-100`
                : `hover:cursor-default`
            }`}
          >
            Portfolio
          </h6>
          <h6
            className={`rotate-180 text-stone-500 opacity-40 transition-opacity duration-700 ${
              openMenu
                ? `hover:cursor-pointer hover:opacity-100`
                : `hover:cursor-default`
            }`}
          >
            Blog
          </h6>
          <h6
            className={`rotate-180 text-stone-500 opacity-40 transition-opacity duration-700 ${
              openMenu
                ? `hover:cursor-pointer hover:opacity-100`
                : `hover:cursor-default`
            }`}
          >
            Contact
          </h6>
        </div>
      </main>
    </div>
  );
};

export default HomeSection;
