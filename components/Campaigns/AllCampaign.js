import Image from "next/image"
import Link from "next/link"
import { BsPencilFill } from "react-icons/bs"
import PreviewComponent from "./PreviewComponent"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { MdDelete } from "react-icons/md"
import { motion } from "framer-motion"
import { useDeleteCampaignMutation, useSelectAllCampaignQuery } from "@/store/APIs/campaignApi"
import { previewCampaignActions } from "@/store/slices/preview-campaign-slice"
import dayjs from "dayjs"

const AllCampaign = ({ id, name, from_date, to_date, total_budget, daily_budget, creative_upload }) => {
  const dispatch = useDispatch()
  const [showEditAndDeleteButton, setShowEditAndDeleteButton] = useState(false)
  const [deleteCampaign] = useDeleteCampaignMutation()

  return (
    <div
      className="all_campaign_bg"
      key={id}
      onMouseEnter={() => setShowEditAndDeleteButton(true)}
      onMouseLeave={() => setShowEditAndDeleteButton(false)}
    >
      <div>
        <div
          className="all_campaign_overlay"
          onClick={() => dispatch(previewCampaignActions.previewCampaignFunction(true))}
        ></div>

        {showEditAndDeleteButton && (
          <div className=" all_campaign_icons_bg ">
            <MdDelete onClick={async () => await deleteCampaign({ campaignId: id })} />
            <Link href="/campaign/edit-campaign/[id]" as={`/campaign/edit-campaign/${id}`}>
              <BsPencilFill className="text-xl" />
            </Link>
          </div>
        )}

        <Image src={creative_upload} alt="all campaign images" layout="fill" objectFit="cover" className="rounded-md" />
        <div className=" all_campaign_text_bg">
          <p
            onClick={() => dispatch(previewCampaignActions.previewCampaignFunction(true))}
            className=" all_campaign_name"
          >
            {name}
          </p>
          <div className="all_campaign_details">
            <div>From: {dayjs(from_date).format("MMM D, YYYY")}</div>
            <div>To: {dayjs(to_date).format("MMM D, YYYY")}</div>
            <div className="all_campaign_budget">
              <p>Total Budget: ${total_budget}</p>
              <p>Daily Budget: ${daily_budget}</p>
            </div>
          </div>
        </div>
      </div>
      <PreviewComponent />
    </div>
  )
}

export default AllCampaign
