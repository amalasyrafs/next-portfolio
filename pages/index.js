import Head from "next/head";
import { useState } from "react";
import { ReactLenis } from "@studio-freight/react-lenis";

// Local import
import MainSection from "@/components/home/main-section";
import PortfolioSection from "@/components/home/portfolio-section";
import ContactUsSection from "@/components/home/contact-us-section";
import VerticalNavbar from "@/components/home/navbar";

export default function Home() {
  const [section, setSection] = useState(0);
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
      <ReactLenis
        root
        options={{
          infinite: true,
          smoothWheel: true,
        }}
      >
        <MainSection setSection={setSection} />
        <PortfolioSection setSection={setSection} />
        <ContactUsSection setSection={setSection} />
        <VerticalNavbar section={section} />
      </ReactLenis>
    </>
  );
}
