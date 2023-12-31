import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "./utils/appSlice";
import React from "react";
import { YOUTUBE_SEARCH_API,YOUTUBE_SEARCH_RESULTS, getSearchVideoData,mergedObjects, GOOGLE_API_KEY} from "./Constants";
import { searchResult } from "./utils/searchResultSlice";
import { cacheResult } from "./utils/searchSlice";
import { addVideos } from "./utils/videoDetailsSlice";
import {useNavigate} from "react-router-dom"




const Head=()=>{
    const[searchQuery,setSearchQuery]= React.useState("")
    const[suggestions,setSuggestions]=React.useState([])
    const [isSearchClick,setIsSearchClick]=React.useState(false)
    const[showSuggestion, setShowSuggestion]=React.useState(false)
    const navigation=useNavigate()
    const searchCache=useSelector(store=>store.search)
    
    const dispatch=useDispatch();
    const handleToggleMenu=()=>{
        dispatch(toggleMenu())
    }
const handleSearchQuery=(e)=>{
    const searchInput=e.target.value
    setSearchQuery(searchInput)
    searchInput?setShowSuggestion(true):setShowSuggestion(false)
     }
    
const navigateClick=()=>{
    if(searchQuery.trim()!=="")
    navigation('/searchResults')
}

const handleClickOutside=(event)=>{
    const isSearchBoxClicked=event.target.closest(".searchInput")
    const isSuggestionBoxClicked=event.target.closest(".suggestionBox")
    if(!isSearchBoxClicked && !isSuggestionBoxClicked){
        setShowSuggestion(false)
    }

}
/* To recognise click events beyond searchBox and suggestion box*/
React.useEffect(()=>{
    document.addEventListener("click",handleClickOutside)

    return()=>document.removeEventListener("click",handleClickOutside)
},[])

    React.useEffect(()=>{
       
        const timer=setTimeout(()=>{
            
            if(searchCache[searchQuery]){
                setSuggestions(searchCache[searchQuery])}
            else{
                getSearchQueryAPI();
            }
        }
                ,200)
        
        return()=>{
            clearTimeout(timer);
        }

    },[searchQuery])

    const getSearchQueryAPI=async()=>{
        // console.log("API CAll-"+ searchQuery)
        const data= await fetch(YOUTUBE_SEARCH_API + searchQuery)
        const json=await data.json();
        setSuggestions(json[1])
        // console.log(json[1])

        dispatch(cacheResult({
            [searchQuery]:json[1]
        }))
    }

    React.useEffect(()=>{
        if(isSearchClick){
            getSearchResults()
            setIsSearchClick(false)
        }
    },[isSearchClick])

   const getSearchResults=async()=>{
        const data=await fetch(YOUTUBE_SEARCH_RESULTS+ searchQuery+"&key="+ GOOGLE_API_KEY)
        const json= await data.json()
        console.log(json.items)
        dispatch(searchResult(json.items))
        const videoData=getSearchVideoData(json)
        const mergeData=mergedObjects(videoData)
        dispatch(addVideos({...mergeData,category:"searchResultVideos"}))
        localStorage.setItem("searchResults",JSON.stringify(json.items))
        setSearchQuery("")
        

         }
         const savedSearchResults = localStorage.getItem('searchResults');
         if (savedSearchResults) {
           dispatch(searchResult(JSON.parse(savedSearchResults)));
         }
    
      return(
        
        
        <div className="grid grid-flow-col px-0 p-1 md:p-3 shadow-lg items-center fixed top-0 w-screen md:w-full bg-white z-10">
            <div className="md:col-span-1 hidden md:block" >
                <svg onClick={()=>handleToggleMenu()} data-testid="toggleSideButton" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className=" cursor-pointer w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
            </div>
            <div className=" col-span-11 md:col-span-10 pl-4 md:pl-32">
                <div className="flex align-center">
                    <input className="w-3/4 border border-gray-300 p-1 pl-3 rounded-l-full" type="text" value={searchQuery}  onChange={handleSearchQuery} placeholder="Search here"/>
                    <button data-testid="searchButton" disabled={searchQuery?.length<1} onClick={()=>{setIsSearchClick(true); setShowSuggestion(false); navigateClick()}} className="px-3 border border-gray-300 p-1 rounded-r-full bg-gray-100">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className=" cursor-pointer w-6 h-6">
    <path fillRule="evenodd" d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z" clipRule="evenodd" />
    </svg>
                    </button>
                    
                </div>
                {showSuggestion &&
                <div className= "fixed p-1 bg-white md:py-2 md:px-2 w-[16rem] md:w-[47.5rem] border border-gray-100 shadow-md mt-0 rounded-lg">
                    <ul>
                        {suggestions.map((s, index)=><li onClick={()=>{setSearchQuery(s); setIsSearchClick(true); setShowSuggestion(false); navigateClick()}} className=" p-1 md:py-2 md:px-3 hover:bg-gray-300 rounded-lg cursor-pointer " key={index}>{s}</li>)}
                        
                    </ul>
                </div>
}
                
               
            </div>
            
            <div className="col-span-1 md:col-span-1">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
</svg>
            </div>

        </div>
        
    )       
}

export default Head ;
