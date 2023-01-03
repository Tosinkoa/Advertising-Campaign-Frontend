const CampaignEditFormSkeleton = () => {
  return (
    <div className="pb-10 relative ">
      <div className="campaign_edit_skeleton">
        <div className="campaign_edit_skeleton_bg " />
        <div>
          <div className=" flex flex-col  gap-y-3 md:w-9/12 lg:mr-auto w-11/12 mx-auto">
            <div className=" rounded-sm w-full bg-gray-300 h-12" />
            <div className="flex">
              <div className="mr-2 rounded-sm w-full pl-5 h-12 bg-gray-300" />
              <div className="mr-2 rounded-sm w-full pl-5  h-12 bg-gray-300" />
            </div>
            <div className="flex">
              <div className="mr-2 rounded-sm w-full pl-5 h-12 bg-gray-300" />
              <div className="mr-2 rounded-sm w-full pl-5  h-12 bg-gray-300" />
            </div>
            <div className="flex mt-8 justify-between w-8/10">
              <div className="mr-2 rounded-sm pl-5 h-8 w-20 bg-gray-300" />
              <div className="mr-2 rounded-sm pl-5  h-8 w-20 bg-gray-300" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CampaignEditFormSkeleton
