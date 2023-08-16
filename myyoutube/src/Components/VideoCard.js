import React from 'react'

const VideoCard = ({info}) => {
    // console.log(info)
    const {snippet,statistics}=info
    const {thumbnails,channelTitle, title}=snippet
    
        
  return (
    <div className="p-1 m-1 w-80 cursor-pointer transition-transform hover:scale-110 ">
        <img className="rounded-lg" alt= "Thumbnail" src={thumbnails.medium.url}/>
        <h1 className="font-semiBold line-clamp-2 overflow-hidden">{title}</h1>
        <h6 className="text-gray-500">{channelTitle}</h6>
        <h6 className="text-gray-500">{(statistics.viewCount > 1000000) ? Math.trunc(statistics.viewCount / 1000000) + 'M views' : Math.trunc(statistics.viewCount / 1000) + 'k views'}
</h6>
         
    </div>
  )
}

export default VideoCard