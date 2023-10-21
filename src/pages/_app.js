import "@/styles/globals.css";
import { Cabin } from "@next/font/google";

const cabin = Cabin({
  subsets: ["latin"],
});

/* importing local font trip sans
import localfont from "@next/font/local";
const myFont = localFont({ src: "./mu-font.woff2" });
*/
export default function App({ Component, pageProps }) {
  return (
    <main className={cabin.className}>
      <Component {...pageProps} />
    </main>
  );
}
