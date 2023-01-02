import Image from "next/image"
import Link from "next/link"

const NoCampaignMessage = () => {
  return (
    <>
      <div className="no_campagin_image_bg">
        <Image
          src="/assets/gif/empty-data.gif"
          alt="empty box"
          layout="fill"
          objectFit="cover"
          className="rounded-2xl"
        />
      </div>
      <p className="no_campaign_message_text">
        Campaign has not been created.{" "}
        <Link href="/campaign/new-campaign">
          <bold className="text-blue-600">Want to add campaign?</bold>
        </Link>
      </p>
    </>
  )
}

export default NoCampaignMessage
