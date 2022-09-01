import { GetStaticProps } from "next";
import axios from "axios";

// Local import
import HomeSection from "@/components/home/home-section";
import PortfolioSection, {
  PortfolioItem,
} from "@/components/home/portfolio-section";
import AboutSection from "@/components/home/about-section";
import BlogSection, { BlogItem } from "@/components/home/blog-section";
import EmptySection from "@/components/home/empty-section";

interface PortfolioItemResponse {
  portfolioData: PortfolioItem[];
  blogData: BlogItem[];
}

const Home = ({ portfolioData, blogData }: PortfolioItemResponse) => {
  return (
    <div className="h-screen overflow-y-scroll snap-y snap-mandatory">
      <HomeSection />
      {/* <AboutSection /> */}
      {portfolioData.length > 0 ? (
        portfolioData?.map((data, index) => (
          <PortfolioSection
            key={data.id}
            data={data}
            contentAlignment={index % 2 === 0 ? "left" : "right"}
          />
        ))
      ) : (
        <EmptySection title="Portfolio" />
      )}
      <BlogSection data={blogData} />
      <HomeSection />
    </div>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  try {
    const response = await axios.get(
      `${process.env.API_ENDPOINT}/portfolios?populate=*`
    );
    const data: PortfolioItem[] = response.data.data;

    const blogResponse = await axios.get(
      `${process.env.API_ENDPOINT}/blogs?populate=*`
    );
    const blogData: BlogItem[] = blogResponse.data.data;
    return {
      props: {
        portfolioData: data,
        blogData: blogData,
      },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};

export default Home;
