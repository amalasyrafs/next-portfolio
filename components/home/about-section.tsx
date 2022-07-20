interface AboutSectionProps {
  bgColor?: string;
}

const AboutSection = ({ bgColor = "bg-white" }: AboutSectionProps) => {
  return (
    <div
      className={`${bgColor} flex flex-col h-screen snap-center items-center`}
    >
      {/* <div className="w-full  bg-stone-700 h-1/3 relative">
        <h2
          className="text-stone-700 text-3xl lg:text-6xl absolute -bottom-6 left-10"
          style={{
            background:
              "-webkit-linear-gradient(top, #fafaf9 0%,#fafaf9 60%,#44403c 60%,#44403c 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          About Me
        </h2>
      </div> */}
    </div>
  );
};

export default AboutSection;
