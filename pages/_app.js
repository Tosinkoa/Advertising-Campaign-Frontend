import { motion } from "framer-motion"
import "../styles/globals.css"
import store from "@/store/store"
import { Provider } from "react-redux"
import Aos from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"

export default function App({ Component, pageProps, router }) {
  useEffect(() => {
    Aos.init({
      easing: "ease-in-out-sine",
      once: false,
      duration: 600,
    })
  }, [])

  return (
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
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </motion.div>
  )
}
