import type { NextPage } from "next";
import Footer from "../components/footer";
import HTMLHead from "../components/head";

const Home: NextPage = () => {
  return (
    <div>
      <HTMLHead />

      <main className="flex flex-row bg-slate-200 min-h-screen">
        <header>
          <nav className="font-sans">amalasyrafs</nav>
        </header>

        {/* <Footer /> */}
      </main>
    </div>
  );
};

export default Home;
