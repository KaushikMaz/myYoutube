import React from 'react'
import VideoCard from '../VideoCard'
import { useSelector } from 'react-redux/'
import {Link} from "react-router-dom"
import { ExploreContentShimmer } from './Shimmer'


const useContent = (API, initialRowValue) => {
  const[ contentVideos,setContentVideos]=React.useState([])
  const isMenuOpen= useSelector(store=>store.app.isMenuOpen)
  const videosPerRow = isMenuOpen ? 3 : 4;
  const initialRows=initialRowValue;
  const InitialVideos=videosPerRow*initialRows
  const [videosVisible, setVideosVisible] = React.useState(InitialVideos);


  React.useEffect(()=>{
    getContentVideos()
    
  },[])

  const getContentVideos=async()=>{
    const response=await fetch(API)
    const jsonData= await response.json()
    setContentVideos(jsonData?.items)
        
  }

  React.useEffect(() => {
    // Update videosVisible when isMenuOpen changes, but only if it's not equal to the total number of videos
    if (videosVisible !== contentVideos.length) {
      const updatedVideosPerRow = isMenuOpen ? 3 : 4;
      setVideosVisible(updatedVideosPerRow * initialRows);
    }
  }, [isMenuOpen, videosVisible, initialRows, contentVideos.length]);


  return (
    <>
    {contentVideos.length>0?(
     
    <div className={`font-bold ${isMenuOpen ? "ml-60" : "ml-6"} mt-[4rem] flex flex-wrap `}>
     {contentVideos.slice(0,videosVisible).map(video => (
        <Link key={video.id} to={"/watch?v=" + video.id}>
          <VideoCard info={video} />
        </Link>
        ))}
      {videosVisible < contentVideos.length && (
         <button
            className={`${isMenuOpen ? "w-[87%]" : "w-full"} px-3 py-1 m-1 border border-gray-300 rounded-lg hover:bg-gray-500`}
            onClick={() => setVideosVisible(contentVideos.length)}
        >
          <h1 className='font-light'>Load More</h1>
        </button>
      )}
    </div>
    
    ):(<ExploreContentShimmer/>)}
    </>
  )
  
}

export default useContent