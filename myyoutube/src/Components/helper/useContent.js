import React from 'react'
import VideoCard from '../VideoCard'
import { useSelector,useDispatch } from 'react-redux/'
import {Link} from "react-router-dom"
import { ExploreContentShimmer,VideoShimmer } from './Shimmer'
import { addVideos} from '../utils/videoDetailsSlice'
import { mergedObjects,getVideoData } from '../Constants'

const useContent = (API,initialRowValue,category) => {
  const[ contentVideos,setContentVideos]=React.useState([])
  const dispatch=useDispatch()
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

    const videoData=getVideoData(jsonData)
    const mergeData=mergedObjects(videoData)

    if(category==="popularMusic"){
      dispatch(addVideos({...mergeData,category:"popularMusic"}))
    }else if (category==="englishMusic"){
      dispatch(addVideos({...mergeData,category:"englishMusic"}))
    }else if (category==="frenchMusic"){
      dispatch(addVideos({...mergeData,category:"frenchMusic"}))
    }else if (category==="popularNews"){
      dispatch(addVideos({...mergeData,category:"popularNews"}))
    }else if (category==="englishNews"){
      dispatch(addVideos({...mergeData,category:"englishNews"}))
    }else if (category==="sportsVideos"){
      dispatch(addVideos({...mergeData,category:"sportsVideos"}))
    }else if (category==="gamingVideos"){
      dispatch(addVideos({...mergeData,category:"gamingVideos"}))
    }








    
            
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
     
    <div className={`font-bold ${isMenuOpen ? "md:ml-60" : "md:ml-6"} mt-[3rem] md:mt-[4rem] flex flex-wrap `}>
     {contentVideos.slice(0,videosVisible).map(video => (
        <Link key={video.id} to={"/watch?v=" + video.id}>
          <VideoCard info={video} />
        </Link>
        ))}
      {videosVisible < contentVideos.length && (
         <>
         <button
            className={`${isMenuOpen ? "md:w-[87%]" : "md:w-[98%]"} w-[25%] left-[38%] fixed bottom-12 md:static rounded-l-full rounded-r-full px-1 bg-opacity-70 bg-slate-300 md:px-3 md:py-1 md:m-1 border border-gray-300 rounded-lg hover:bg-gray-500`}
            onClick={() => setVideosVisible(contentVideos.length)}
        >
          <h1 className='text-sm md:text-base font-light'>Load More</h1>
        </button>
        <div className={` ml-1 mt-0 m-1 hidden md:block border  border-b-2 border-gray-300 ${isMenuOpen ? "w-[87%]" : "w-[98%]"}` }></div>
        </>
      )}
    </div>
    
    ):((window.innerWidth<768)?<VideoShimmer/>:<ExploreContentShimmer/>)}
    </>
  )
  
}

export default useContent