import Head from "next/head"
import Navbar from "./Navbar"
import Footer from "./Footer"
import { Open_Sans } from "@next/font/google"
import PreviewComponent from "../Campaigns/PreviewComponent"
import { useSelector } from "react-redux"

const opensans = Open_Sans({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700", "800"] })

const Layout = ({ title, keywords, description, children }) => {
  const showPreviewCard = useSelector((state) => state.previewCampaign.previewCampaign)

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={`${opensans.className} layout_bg`}>
        <Navbar />
        {showPreviewCard && <PreviewComponent />}
        {children}
        <Footer />
      </div>
    </>
  )
}

export default Layout

// This is use for SEO Optimization
Layout.defaultProps = {
  title: "Arce-Wave Project",
  description: "Arce-Wave Project",
  keywords: "arcewave-project.com, arcewave.com, arcewave",
}
