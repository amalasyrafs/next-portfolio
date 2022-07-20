import { GetStaticProps } from "next";
import axios from "axios";

// Local import
import HomeSection from "@/components/home/home-section";
import PortfolioSection from "@/components/home/portfolio-section";
import AboutSection from "@/components/home/about-section";
import EmptySection from "@/components/home/empty-section";

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

interface PortfolioItemResponse {
  portfolioData: PortfolioItem[];
}

const Home = ({ portfolioData }: PortfolioItemResponse) => {
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
    return {
      props: {
        portfolioData: data,
      },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};

export default Home;
