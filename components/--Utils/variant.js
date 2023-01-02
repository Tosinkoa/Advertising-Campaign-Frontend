import { Variant } from "framer-motion";

export const fadeInUp = {
  initial: {
    opacity: 0,
    y: "-100",
  },
  animate: {
    y: 0,
    opacity: 1,

    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};
