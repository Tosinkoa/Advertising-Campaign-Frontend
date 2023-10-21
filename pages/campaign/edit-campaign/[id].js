import WebsiteMetadata from "@/components/00WebsiteMetaData/WebsiteMetadata";
import Header from "@/components/01Utils/Header";
import CampaignForm from "@/components/Campaigns/CampaignForm";
import CampaignEditFormSkeleton from "@/components/LoadingSkeleton/CampaignEditFormSkeleton";
import { useSelectACampaignQuery } from "@/store/APIs/campaignApi";
import { useRouter } from "next/router";
import { useEffect } from "react";

const NewCampaign = () => {
  const router = useRouter();
  const id = router?.query?.id;
  useEffect(() => {
    if (!router.isReady) return;
  }, [router]);

  const { data: campaignData, isLoading: campaignDataIsLoading } = useSelectACampaignQuery(id);
  const theCampaign = {
    name: campaignData?.data?.name ?? "",
    from_date: campaignData?.data?.from_date ?? "",
    to_date: campaignData?.data?.to_date ?? "",
    total_budget: campaignData?.data?.total_budget ?? "",
    daily_budget: campaignData?.data?.daily_budget ?? "",
    creative_upload: campaignData?.data?.creative_upload ?? "",
  };

  return (
    <WebsiteMetadata>
      <Header headerText="EDIT CAMPAIGN" />
      {campaignDataIsLoading && <CampaignEditFormSkeleton />}
      {!campaignDataIsLoading && (
        <CampaignForm
          theCampaign={theCampaign}
          campaignId={id}
          formId="edit-campaign"
          newCampaign={false}
        />
      )}
    </WebsiteMetadata>
  );
};

export default NewCampaign;
