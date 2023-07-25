import React from "react"

const SearchResultCard=({info})=>{
    const{videoId}=info.id
    const{channelTitle,description,title,thumbnails}=info.snippet
  return(
    <div className="p-1 m-1 w-80 cursor-pointer">
        <img className="rounded-lg" alt= "Thumbnail" src={thumbnails.medium.url}/>
        <h1 className="font-semiBold line-clamp-2 overflow-hidden">{title}</h1>
        <h6 className="text-gray-500">{channelTitle}</h6>
    </div>

    )

}

export default SearchResultCard