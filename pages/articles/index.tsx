import { GetServerSideProps } from "next";
import axios from "axios";

export interface ArticleItem {
  id: number;
  attributes: {
    title?: string;
    description?: string;
    author_email?: string;
    created_at: any;
    updated_at: any;
    published_at: any;
  };
}

interface ArticleItemResponse {
  data: ArticleItem[];
  meta: any;
}

const Articles = ({ data, meta }: ArticleItemResponse) => {
  const deleteItem = async (id: number) => {
    try {
      await axios.delete(`${process.env.API_ENDPOINT}/articles/${id}`);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(meta);
  return (
    <div className="flex flex-col gap-1 justify-center h-screen items-center">
      {data.map((data) => (
        <div className="flex gap-2" key={data.id}>
          <p key={data.id}>{data.attributes.title} : </p>
          <p key={data.id}>{data.attributes.description}</p>
          <button onClick={() => deleteItem(data.id)} className="bg-red-200">
            delete
          </button>
        </div>
      ))}
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  if (process.env.NODE_ENV === "production") {
    return {
      redirect: {
        permanent: false,
        destination: "/",
      },
    };
  } else {
    const page = query.page || 1;
    try {
      const response = await axios.get(
        `${process.env.API_ENDPOINT}/articles?page=${page}`
      );
      const data: ArticleItem[] = response.data.data;
      const meta = response.data.meta;
      return {
        props: {
          data: data,
          meta: meta,
        },
      };
    } catch (error) {
      return {
        notFound: true,
      };
    }
  }
};

export default Articles;
