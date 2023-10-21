import { useSelector } from "react-redux";
import PreviewComponent from "../Campaigns/PreviewComponent";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  const showPreviewCard = useSelector((state) => state.previewCampaign.previewCampaign);

  return (
    <div className="layout_bg">
      <Navbar />
      {showPreviewCard && <PreviewComponent />}
      {children}
      <Footer />
    </div>
  );
};

export const getLayout = (page) => <Layout>{page}</Layout>;
export default Layout;
