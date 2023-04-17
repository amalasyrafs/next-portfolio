import "../styles/globals.css";
import { Inter, Raleway } from "@next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
});

export default function App({ Component, pageProps }) {
  return (
    <main
      className={`${inter.variable} ${raleway.variable} bg-invoke-bgBlack font-sans`}
    >
      <Component {...pageProps} />
    </main>
  );
}
