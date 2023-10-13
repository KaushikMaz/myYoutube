import React from "react"


const SearchResultCard=({info})=>{
  
  // console.log(info)
  const {snippet}=info
  const{channelTitle,description,title,thumbnails}=snippet
  return(
    <div className={`md:p-2 md:flex w-screen cursor-pointer rounded-md`}>
        <img className="rounded-lg w-[100%] " alt= "Thumbnail" src={thumbnails.medium.url}/>
        <div>
          <h1 className="font-Bold pl-2 pt-1">{title}</h1>
          <h2 className="pt-1 pl-2 text-gray-500">{channelTitle}</h2>
          <h6 className="p-2 text-gray-500 hidden md:block">{description}</h6>
        </div>
    </div>

    )

}

export default SearchResultCard