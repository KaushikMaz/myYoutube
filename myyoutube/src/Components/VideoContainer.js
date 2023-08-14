import React from 'react'
import { useEffect,useState } from 'react'
import { YOUTUBE_API_KEY } from './Constants'
import VideoCard from "./VideoCard"
import {Link} from "react-router-dom"
import { useSelector } from 'react-redux/es/hooks/useSelector'
import SearchResultCard from './searchResultCard'
import { VideoShimmer } from './helper/Shimmer'


const VideoContainer = () => {
  const [videos,setVideos]=useState([])
  const isMenuOpen= useSelector(store=>store.app.isMenuOpen)
  const searchResult=useSelector(store=>store.searchResult)
  const videosPerRow = isMenuOpen ? 3 : 4;
  const initialRows=3;
  const InitialVideos=videosPerRow*initialRows
  const [videosVisible, setVideosVisible] = useState(InitialVideos);
  const [searchResultVideos,setSearchResultVideos]=useState([])

  useEffect(()=>{
    searchResult.length>0?(setSearchResultVideos(searchResult)):(setSearchResultVideos([]))

    return ()=>{
      setSearchResultVideos([])
    }
  },[searchResult])
  
  
    useEffect(()=>{
      getVideos();
    },[])

    const getVideos=async()=>{
      try{
        const data= await fetch(YOUTUBE_API_KEY)
        if(!data.ok){
          throw new Error("Network Response Issues")
        }
        const json=await data.json();
        // console.log(json.items)
        setVideos(json.items)

      }catch(error){
        console.log("Error fetching Videos",error)
      }
        
   }

   useEffect(() => {
    // Update videosVisible when isMenuOpen changes, but only if it's not equal to the total number of videos
    if (videosVisible !== videos.length) {
      const updatedVideosPerRow = isMenuOpen ? 3 : 4;
      setVideosVisible(updatedVideosPerRow * initialRows);
    }
  }, [isMenuOpen, videosVisible, initialRows, videos.length]);


// console.log(searchResultVideos)

  return(
    
  <>
  {searchResultVideos.length > 0 ? (
    <div className={`${isMenuOpen ? "ml-48" : "ml-4"} mt-[7rem]`}>
      {searchResultVideos.map(v => (
        <Link key={v.id.videoId} to={"/watch?v=" + v.id.videoId}>
          <SearchResultCard info={v} />
        </Link>
      ))}
    </div>
  ) : (
    <div className={`flex flex-wrap ${isMenuOpen ? "ml-48" : "ml-4"} mt-[7rem]`}>
      {videos.slice(0, videosVisible).map(video => (
        <Link key={video.id} to={"/watch?v=" + video.id}>
          <VideoCard info={video} />
        </Link>
      ))}
      {videosVisible < videos.length && (
        <button
          className="w-full px-3 py-1 m-1 border border-gray-300 rounded-lg hover:bg-gray-500"
          onClick={() => setVideosVisible(videos.length)}
        >
          Load More
        </button>
      )}
    </div>)
  
      }
</>

 
    
  )
}

export default VideoContainer