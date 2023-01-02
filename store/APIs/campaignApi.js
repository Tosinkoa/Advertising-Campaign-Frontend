import { fetcherApi } from "../fetcherApi"

export const campaignApi = fetcherApi.injectEndpoints({
  endpoints(build) {
    return {
      createCampaign: build.mutation({
        query: (body) => ({ url: "/create-campaign", method: "post", body }),
        invalidatesTags: ["ForCampaign"],
      }),
      updateCampaign: build.mutation({
        query: ({ campaignId, formData }) => ({ url: `/update-campaign/${campaignId}`, method: "put", body: formData }),
        invalidatesTags: ["ForCampaign"],
      }),
      deleteCampaign: build.mutation({
        query: ({ campaignId }) => ({ url: `/delete-campaign/${campaignId}`, method: "delete" }),
        invalidatesTags: ["ForCampaign"],
      }),
      selectACampaign: build.query({
        query: (campaignId) => ({ url: `/select-a-campaign/${campaignId}` }),
        providesTags: ["ForCampaign"],
      }),
      selectAllCampaign: build.query({
        query: () => ({ url: `/select-all-campaign` }),
        providesTags: ["ForCampaign"],
      }),
    }
  },
})

export const {
  useCreateCampaignMutation,
  useDeleteCampaignMutation,
  useSelectACampaignQuery,
  useUpdateCampaignMutation,
  useSelectAllCampaignQuery,
} = campaignApi
