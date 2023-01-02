import Image from "next/legacy/image"
import Typewriter from "typewriter-effect"
import { motion } from "framer-motion"
import { fadeInUp } from "../--Utils/variant"

const Banner = () => {
  return (
    <div className="w-full">
      <div className="relative block w-full h-[70vh] lg:h-[80vh] ">
        <div className="absolute  top-0 right-0 bottom-0 left-0 h-full bg-gradient-to-r from-black to-transparent z-10 flex opacity-75"></div>
        <motion.div variants={fadeInUp} initial="initial" animate="animate">
          <Image
            src="/assets/images/arcewave-project-banner.jpg"
            objectFit="cover"
            alt="a beautiful lady"
            layout="fill"
            className="w-full"
          />
        </motion.div>
        <div className="flex relative text-gray-200 z-10 flex-col w-2/4 lg:w-2/5 ml-10 lg:ml-16 space-y-4 pt-28 ">
          <p className="font-bold lg:text-2xl">Enjoy the opportunities </p>
          <h1 className="font-bold font-cursive-marker text-2xl md:text-4xl lg:text-7xl ">Advertisment Campaign</h1>
          <div className="flex">
            <Typewriter
              options={{
                strings: [
                  "We help your business to reach a large audience and increase your brand awareness. And also makes you stand above your competitors",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
