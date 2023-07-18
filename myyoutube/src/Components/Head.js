import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "./utils/appSlice";
import React from "react";
import { YOUTUBE_SEARCH_API} from "./Constants";
import { cacheResult } from "./utils/searchSlice";



const Head=()=>{
    const[ searchQuery,setSearchQuery]= React.useState("")
    const [suggestions,setSuggestions]=React.useState([])
    const searchCache=useSelector(store=>store.search)
    
    const dispatch=useDispatch();
    const handleToggleMenu=()=>{
        dispatch(toggleMenu())
    }

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
        console.log("API CAll-"+ searchQuery)
        const data= await fetch(YOUTUBE_SEARCH_API + searchQuery)
        const json=await data.json();
        setSuggestions(json[1])
        // console.log(json[1])

        dispatch(cacheResult({
            [searchQuery]:json[1]
        }))
    }
    
    return(
        <div className="grid grid-flow-col p-3 shadow-lg items-center fixed top-0 w-full bg-white z-10">
            <div className="col-span-1 " >
                <svg onClick={()=>handleToggleMenu()} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="cursor-pointer w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
            </div>
            <div className="col-span-10 px-8">
                <div className="flex align-center">
                    <input className="w-3/4 border border-gray-300 p-1 pl-3 rounded-l-full" type="text" value={searchQuery} onBlur={()=>setSearchQuery("")} onChange={(e)=>setSearchQuery(e.target.value)} placeholder="Search here"/>
                    <button className="px-3 border border-gray-300 p-1 rounded-r-full bg-gray-100">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <path fillRule="evenodd" d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z" clipRule="evenodd" />
    </svg>
                    </button>
                    
                </div>
                {searchQuery &&
                <div className= "fixed z-20 bg-white py-2 px-2 w-[49.5rem] border border-gray-100 shadow-md mt-0 rounded-lg">
                    <ul>
                        {suggestions.map((s, index)=><li className="py-2 px-3 cursor-pointer " key={index}>{s}</li>)}
                        
                    </ul>
                </div>
}
                
               
            </div>
            
            <div className="col-span-1">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
</svg>
            </div>

        </div>
        
    )       
}

export default Head;
