import { FaFacebook, FaTwitter } from "react-icons/fa"
import Link from "next/link"
import Image from "next/legacy/image"

const Footer = () => {
  const date = new Date()
  const year = date.getFullYear()

  return (
    <div className="flex h-fit w-full mt-10 bottom-0 ">
      <div className=" bottom-0  h-fit w-full py-10 lg:px-20 px-10  dark:border-gray-500 bg-gradient-to-tr from-primary-600 via-primary-500 bg-primary-400 ">
        <div className="grid md:grid-cols-3 text-gray-50 font-semibold gap-y-8">
          <div className="font-cursive-marker  flex  border-2  justify-center  text-3xl lg:text-4xl h-16 w-16 bg-gray-50 text-gray-700 rounded-full items-center">
            <Link href="/">
              <h1>AC</h1>
            </Link>
          </div>
          <div className="font-medium flex flex-col">
            <h1 className="font-extrabold text-lg mb-2">Services</h1>
            <Link href="/#advertisement">
              <button>Advertisment</button>
            </Link>
            <Link href="/#boost-traffic">
              <button>Boost Traffic</button>
            </Link>
            <Link href="/#trust-building">
              <button>Trust Building</button>
            </Link>
          </div>
          <div className="font-medium flex flex-col">
            <h1 className="font-extrabold text-lg mb-2">Navigate</h1>
            <Link href="/campaign/new-campaign">
              <button>Create Campaign</button>
            </Link>
            <Link href="/campaign">
              <p>View Campagin</p>
            </Link>
            <Link href="/">
              <button>Visit Home</button>
            </Link>
          </div>
        </div>
        <div className="space-y-3 mt-20">
          <div className="flex md:text-2xl sm:text-xl justify-center items-center  m-3 space-x-8 ">
            <Link href="https://facebook.com" target="_blank">
              <FaFacebook className="text-[#4267B2] bg-white rounded-full text-[1.5em]" />
            </Link>
            <Link href="https://twitter.com" target="_blank">
              <FaTwitter className="text-[#1DA1F2] text-[1.5em]" />
            </Link>
          </div>

          <div className="flex justify-center text-xs text-bases gap-2 text-white">
            <span>@{year}</span>
            <span>Ad Camp</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
