const CampaignEditFormSkeleton = () => {
  return (
    <div className="pb-10 relative ">
      <div className="grid lg:grid-cols-2 space-y-8 lg:space-y-0 items-center animate-pulse transition-all duration-500">
        <div className="h-80 relative rounded-md border flex items-center mx-auto place-content-center  bg-gray-300  flex-col font-bold w-11/12 md:w-80 " />
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
