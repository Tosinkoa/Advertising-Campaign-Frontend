import Layout from "@/components/Helper/Layout"
import { useSelectAllCampaignQuery } from "@/store/APIs/campaignApi"
import "aos/dist/aos.css"
import AllCampaign from "@/components/Campaigns/AllCampaign"
import AllCampaignSkeleton from "@/components/LoadingSkeleton/AllCampaignSkeleton"
import NoCampaignMessage from "@/components/--Utils/NoCampaignMessage"

const Campaigns = () => {
  const {
    currentData: allCampaignData,
    isLaoding: allCampaignDataIsLoading,
    isSuccess: allCampaignDataSuccess,
    isError: allCampaignDataError,
    isFetching: allCampaignDataIsFetching,
  } = useSelectAllCampaignQuery()
  console.log("RESULT:", useSelectAllCampaignQuery())
  return (
    <Layout>
      <div className="pb-10 pt-20 md:24 ">
        <h1 className="text-lg md:text-2xl font-bold mb-10 lg:mb-16 flex justify-center ">All Campaigns</h1>
        {!allCampaignData && allCampaignDataIsFetching && !allCampaignDataSuccess && <AllCampaignSkeleton />}
        {!allCampaignDataIsLoading && allCampaignDataError && <NoCampaignMessage />}
        <div className="grid lg:grid-cols-4 md:grid-cols-3 w-11/12 gap-4 mx-auto ">
          {!allCampaignDataIsFetching &&
            !allCampaignDataError &&
            allCampaignData?.data?.map((data) => (
              <div key={data.id} data-aos="fade-up" data-aos-delay="200">
                <AllCampaign
                  id={data.id}
                  name={data.name}
                  from_date={data.from_date}
                  to_date={data.to_date}
                  total_budget={data.total_budget}
                  daily_budget={data.daily_budget}
                  creative_upload={data.creative_upload}
                />
              </div>
            ))}
        </div>
      </div>
    </Layout>
  )
}

export default Campaigns
