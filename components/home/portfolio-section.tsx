import Image from "next/image";

type alignmentEnum = "left" | "right";

export interface PortfolioItem {
  id: number;
  attributes: {
    name: string;
    url: string;
    description?: string;
    created_at: any;
    updated_at: any;
    published_at: any;
    coverPhoto?: {
      data: any[];
    };
  };
}

interface PortfolioSectionProps {
  bgColor?: string;
  contentAlignment?: alignmentEnum;
  data?: PortfolioItem | undefined;
}

const PortfolioSection = ({
  bgColor = "bg-white",
  contentAlignment = "left",
  data,
}: PortfolioSectionProps) => {
  return (
    <div
      className={`${bgColor} flex ${
        contentAlignment === "left" ? "flex-row" : "flex-row-reverse"
      } h-screen snap-center`}
    >
      <div className="w-1/2 flex flex-col justify-center items-center gap-2">
        <h4 className="w-1/2 text-[5vh] uppercase font-bold tracking-wider text-stone-700 translate-y-80 opacity-20 intersect:opacity-100 intersect:translate-y-0 transition duration-[900ms]">
          {data?.attributes.name}
        </h4>
        <h6 className="w-1/2 text-stone-400 leading-8">
          {data?.attributes.description} {data?.attributes.description}{" "}
          {data?.attributes.description}
        </h6>
        <a
          href={data?.attributes.url}
          target="__blank"
          rel="noopener noreferrer"
          className="w-1/2 relative"
        >
          <button className="w-full py-4 text-stone-700  text-left uppercase relative z-10">
            View Project
          </button>
          <div className="w-1/3 bg-red-100 h-4 absolute top-1/2 left-4 z-0"></div>
        </a>
      </div>
      <div className="bg-stone-500 w-1/2 relative opacity-100 flex items-center justify-center ">
        <Image
          src={`${process.env.BASE_URL}${data?.attributes.coverPhoto?.data[0].attributes.url}`}
          alt={data?.attributes.coverPhoto?.data[0].attributes.caption}
          layout="fill"
          objectFit="contain"
          className="opacity-100"
        />
        {/* <h1 className="z-10 text-white text-2xl ">{data?.attributes.name}</h1> */}
      </div>
    </div>
  );
};

export default PortfolioSection;
