import CampaignForm from "@/components/Campaigns/CampaignForm"
import Layout from "@/components/Helper/Layout"
import FormHeader from "@/components/--Utils/FormHeader"

const NewCampaign = () => {
  const theCampaign = {
    name: "",
    from_date: "",
    to_date: "",
    total_budget: "",
    daily_budget: "",
    creative_upload: "",
  }

  return (
    <Layout>
      <FormHeader headerText="NEW CAMPAIGN" />
      <CampaignForm theCampaign={theCampaign} formId="new-campaign" />
    </Layout>
  )
}

export default NewCampaign
