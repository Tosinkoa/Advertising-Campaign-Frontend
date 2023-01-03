import Layout from "@/components/Helper/Layout"
import { useSelectAllCampaignQuery } from "@/store/APIs/campaignApi"
import "aos/dist/aos.css"
import AllCampaignSkeleton from "@/components/LoadingSkeleton/AllCampaignSkeleton"
import NoCampaignMessage from "@/components/--Utils/NoCampaignMessage"
import AllCampaignData from "@/components/Campaigns/AllCampaign"
import Header from "@/components/--Utils/Header"

const Campaigns = () => {
  const {
    currentData: allCampaignData,
    isLaoding: allCampaignDataIsLoading,
    isSuccess: allCampaignDataSuccess,
    isError: allCampaignDataError,
    isFetching: allCampaignDataIsFetching,
  } = useSelectAllCampaignQuery()

  return (
    <Layout>
      <Header dontShowBackButton={true} headerText="ALL CAMPAIGN" />
      {!allCampaignData && allCampaignDataIsFetching && !allCampaignDataSuccess && <AllCampaignSkeleton />}
      {!allCampaignDataIsLoading && allCampaignDataError && <NoCampaignMessage />}
      {!allCampaignDataIsFetching && !allCampaignDataError && (
        <div data-aos="fade-up" data-aos-delay="200">
          <AllCampaignData allCampaignData={allCampaignData} />
        </div>
      )}
    </Layout>
  )
}

export default Campaigns
