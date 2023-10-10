import React from 'react'

const VideoCard = ({info}) => {
    // console.log(info)
    const {snippet,statistics}=info
    const {thumbnails,channelTitle, title}=snippet
    // console.log(thumbnails)
    
        
  return (
    <div className="md:p-1 md:m-1  w-screen md:w-80 cursor-pointer ">
        <img className="rounded-lg w-[100%]" alt= "Thumbnail" src={thumbnails.medium.url}/>
        <div className="leading-loose md:leading-none pb-3 pt-1 md:pb-0 md:pt-0">
        <h1 className="text-sm pl-5 md:pl-0  md:text-base font-semiBold line-clamp-2 overflow-hidden">{title}</h1>
        <div className="flex pl-5 md:pl-0 md:flex-col ">
          <h6 className="text-sm md:text-base text-gray-500">{channelTitle}</h6>
          <h6 className="text-gray-500 pl-2 md:pl-0 pb-2 md:pb-0 text-sm md:text-base">{(statistics.viewCount > 1000000) ? Math.trunc(statistics.viewCount / 1000000) + 'M views' : Math.trunc(statistics.viewCount / 1000) + 'k views'}
          </h6>
        </div>
        </div>
         
    </div>
  )
}

export default VideoCard