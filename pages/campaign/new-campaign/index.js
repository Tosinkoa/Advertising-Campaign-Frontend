import CampaignForm from "@/components/Campaigns/CampaignForm";
import Header from "@/components/01Utils/Header";
import WebsiteMetadata from "@/components/00WebsiteMetaData/WebsiteMetadata";

const NewCampaign = () => {
  const theCampaign = {
    name: "",
    from_date: "",
    to_date: "",
    total_budget: "",
    daily_budget: "",
    creative_upload: "",
  };

  return (
    <WebsiteMetadata>
      <Header headerText="NEW CAMPAIGN" />
      <CampaignForm theCampaign={theCampaign} formId="new-campaign" />
    </WebsiteMetadata>
  );
};

export default NewCampaign;
