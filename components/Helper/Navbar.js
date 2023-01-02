import { AiOutlineHome } from "react-icons/ai"
import { TiThMenu } from "react-icons/ti"
import { useRouter } from "next/router"
import Link from "next/link"
import { MdWbSunny } from "react-icons/md"
import { BsMoonStarsFill } from "react-icons/bs"
import { useEffect, useState } from "react"
import { useTheme } from "next-themes"
const Navbar = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return (
    <div className="fixed text-white z-20 ">
      <div className="flex w-full mx-auto px-2 lg:px-8">
        <div className="fixed z-10 inline-flex items-center justify-between h-[8vh] lg:h-[9vh] top-0  bg-black bg-opacity-30  w-full left-0  md:py-4 py-3  sm:px-5 md:px-10 lg:px-24 backdrop-blur-sm ">
          <Link href="/">
            <h1 className=" font-cursive-marker blur-0  flex flex-1  items-center justify-center sm:justify-start text-2xl lg:text-4xl">
              AC
            </h1>
          </Link>
          <div className="items-center lg:text-lg space-x-3 md:text-base md:space-x-4 text-sm font-semi-bold transition-all ">
            <Link href="/campaign/new-campaign">
              <button className="hover:border-b wordSpacing">Create Campaign</button>
            </Link>
            <Link href="/campaign">
              <button className="hover:border-b wordSpacing">View Campaigns</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
