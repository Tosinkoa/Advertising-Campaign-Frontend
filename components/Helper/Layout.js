import Head from "next/head"
import Navbar from "./Navbar"
import Footer from "./Footer"

const Layout = ({ title, keywords, description, children }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="text-gray-800 font-open-san min-h-screen  overflow-hidden bottom-0 relative">
        <Navbar />
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
