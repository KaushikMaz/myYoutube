import SearchResultCard from "./searchResultCard";
import { useSelector } from "react-redux";
import React from "react"
import {Link} from "react-router-dom"



const SearchResults=()=>{
    const searchResult=useSelector(store=>store.searchResult)
    const [searchResultVideos,setSearchResultVideos]=React.useState([])
    const isMenuOpen= useSelector(store=>store.app.isMenuOpen)

React.useEffect(()=>{

    if(searchResult.length>0){
      setSearchResultVideos(searchResult)

      return()=>{
        setSearchResultVideos([])
              }}
    
  },[searchResult]
)
  
return(
    <>
    {searchResultVideos.length > 0 && (
    <div className={`${isMenuOpen ? "md:ml-48" : "md:ml-4"} mt-[3rem] md:mt-[7rem]`}>
      {searchResultVideos.map(v => (
        <Link key={v.id.videoId} to={"/watch?v=" + v.id.videoId}>
          <SearchResultCard info={v} />
        </Link>
      ))}
    </div>
  )}
    </>
)
}

export default SearchResults

  