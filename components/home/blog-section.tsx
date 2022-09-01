import Image from "next/image";
import ReactMarkdown from "react-markdown";

export interface BlogItem {
  id: number;
  attributes: {
    title: string;
    content?: string;
    slug: string;
    tags: string;
    created_at: any;
    updated_at: any;
    published_at: any;
    coverPhoto?: {
      data: any;
    };
  };
}

interface BlogSectionProps {
  bgColor?: string;
  data: BlogItem[] | [];
}

const BlogSection = ({ bgColor = "bg-white", data }: BlogSectionProps) => {
  console.log(data[0].attributes.coverPhoto?.data.attributes);
  return (
    <div className={`${bgColor} flex flex-col h-screen snap-center py-4 px-16`}>
      <h1 className="text-stone-700 text-3xl lg:text-5xl mb-8">Blogs</h1>
      <div className="flex gap-8 flex-1">
        <div className={`w-1/3 h-[80%] rounded-md relative`}>
          <Image
            src={`${process.env.BASE_URL}${data[0].attributes.coverPhoto?.data.attributes.url}`}
            alt={data[0].attributes.coverPhoto?.data.attributes.name}
            layout="fill"
            objectFit="fill"
            className="rounded-md opacity-80"
          />
          {/* <div>{data[0].attributes.content}</div> */}
        </div>
        <div className="w-1/3 bg-blue-500 h-[80%] rounded-md ">
          <h4>hello</h4>
        </div>
        <div className="w-1/3 bg-green-500 h-[80%] rounded-md">
          <h4>hello</h4>
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
