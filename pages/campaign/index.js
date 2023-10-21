import { useSelectAllCampaignQuery } from "@/store/APIs/campaignApi";
import "aos/dist/aos.css";
import AllCampaignSkeleton from "@/components/LoadingSkeleton/AllCampaignSkeleton";
import NoCampaignMessage from "@/components/01Utils/NoCampaignMessage";
import AllCampaignData from "@/components/Campaigns/AllCampaign";
import Header from "@/components/01Utils/Header";
import WebsiteMetadata from "@/components/00WebsiteMetaData/WebsiteMetadata";

const Campaigns = () => {
  const {
    currentData: allCampaignData,
    isLaoding: allCampaignDataIsLoading,
    isSuccess: allCampaignDataSuccess,
    isError: allCampaignDataError,
    isFetching: allCampaignDataIsFetching,
  } = useSelectAllCampaignQuery();

  return (
    <WebsiteMetadata>
      <Header dontShowBackButton={true} headerText="ALL CAMPAIGN" />
      {!allCampaignData && allCampaignDataIsFetching && !allCampaignDataSuccess && (
        <AllCampaignSkeleton />
      )}
      {!allCampaignDataIsLoading && allCampaignDataError && <NoCampaignMessage />}
      {!allCampaignDataIsFetching && !allCampaignDataError && (
        <AllCampaignData allCampaignData={allCampaignData} />
      )}
    </WebsiteMetadata>
  );
};

export default Campaigns;
