import Grid from "@/components/01Utils/Grid";
import WebsiteMetadata from "@/components/00WebsiteMetaData/WebsiteMetadata";
import Banner from "@/components/02Helper/Banner";

const Home = () => {
  return (
    <WebsiteMetadata>
      <Banner />
      <Grid />
    </WebsiteMetadata>
  );
};

export default Home;
