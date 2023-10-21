import Head from "next/head";

const WebsiteMetadata = ({ title, keywords, description, children }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {children}
    </>
  );
};

export default WebsiteMetadata;

// This is use for SEO Optimization
WebsiteMetadata.defaultProps = {
  title: "Arce-Wave Project",
  description: "Arce-Wave Project",
  keywords: "arcewave-project.com, arcewave.com, arcewave",
};
