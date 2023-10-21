import Layout from "@/components/02Helper/Layout";
import store from "@/store/store";
import { Open_Sans, Rubik_Vinyl } from "@next/font/google";
import Aos from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { Provider } from "react-redux";
import "../styles/globals.css";

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-openSans",
});

const rubikVinyl = Rubik_Vinyl({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-rubikVinyl",
});

export default function App({ Component, pageProps, router }) {
  const getLayout = Component.getLayout || ((page) => <Layout children={page} />);

  useEffect(() => {
    Aos.init({
      easing: "ease-in-out-sine",
      once: false,
      duration: 600,
    });
  }, []);

  return (
    <Provider store={store}>
      {getLayout(
        <motion.div
          key={router.route}
          initial="pageInitial"
          animate="pageAnimate"
          exit="pageExit"
          variants={{
            pageInitial: {
              opacity: 0,
            },
            pageAnimate: {
              opacity: 1,
            },
            pageExit: {
              opacity: 0,
            },
          }}
        >
          <main className={`${openSans.variable} ${rubikVinyl.variable}`}>
            <Component {...pageProps} />
          </main>
        </motion.div>
      )}
    </Provider>
  );
}
