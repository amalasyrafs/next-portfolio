import Head from "next/head";

// Local import
import MainSection from "@/components/home/main-section";
import PortfolioSection from "@/components/home/portfolio-section";
import ContactUsSection from "@/components/home/contact-us-section";

export default function Home() {
  return (
    <>
      <Head>
        <title>Amaluddin Asyraf | Hello World</title>
        <meta
          name="description"
          content="Muhammad Amaluddin Asyraf, front-end engineer"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainSection />
      <PortfolioSection />
      <ContactUsSection />
    </>
  );
}
