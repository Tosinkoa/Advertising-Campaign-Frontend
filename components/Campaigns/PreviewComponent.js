import { previewCampaignActions } from "@/store/slices/preview-campaign-slice"
import Image from "next/legacy/image"
import { FaTimes } from "react-icons/fa"
import { useDispatch, useSelector } from "react-redux"

const PreviewComponent = () => {
  const dispatch = useDispatch()
  const showPreviewCard = useSelector((state) => state.previewCampaign.previewCampaign)
  const previewCampaignData = useSelector((state) => state.previewCampaign.previewCampaignData)

  return (
    <>
      {showPreviewCard && (
        <div>
          <div
            onClick={() => dispatch(previewCampaignActions.previewCampaignFunction(false))}
            className="preview_component_overlay"
          ></div>
          <div className="fixed top-0 left-0 right-0 bottom-0 z-20 h-[90vh] md:h-[80vh] md:w-8/12 bg-gray-50 my-auto w-11/12 rounded-md mx-auto">
            <div className="absolute bg-gradient-to-t from-black to-transparent rounded-md  h-full w-full top-0 left-0 bottom-0 right-0 z-10 opacity-70"></div>
            <div
              className="rounded-full p-2 bg-black opacity-75 z-10 absolute right-4 top-3 text-2xl text-gray-50 cursor-pointer"
              onClick={() => dispatch(previewCampaignActions.previewCampaignFunction(false))}
            >
              <FaTimes />
            </div>
            {previewCampaignData?.creative_upload ? (
              <Image
                src={previewCampaignData?.creative_upload}
                className="rounded-md"
                alt="preview-image"
                layout="fill"
                objectFit="cover"
              />
            ) : (
              ""
            )}
            <div className="text-white  absolute z-10 bottom-10 left-4 md:left-10 flex flex-col font-semibold">
              <div className="  font-bold text-4xl truncate">{previewCampaignData?.name ?? ""}</div>
              <div className="flex flex-col">
                <div>From: {previewCampaignData?.from_date ?? ""} </div>
                <div>To: {previewCampaignData?.to_date ?? ""}</div>
                <div className="flex space-x-6 flex-row">
                  <p>Total Budget: ${previewCampaignData?.total_budget || "00.00"}</p>
                  <p>Daily Budget: ${previewCampaignData?.daily_budget || "00.00"}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default PreviewComponent
