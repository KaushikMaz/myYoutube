import React from 'react'
import VideoCard from '../VideoCard'
import { useSelector,useDispatch } from 'react-redux/'
import {Link} from "react-router-dom"
import { ExploreContentShimmer } from './Shimmer'
import { addVideos} from '../utils/videoDetailsSlice'
import { mergedObjects } from '../Constants'

const useContent = (API,initialRowValue) => {
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

    const videoData=jsonData?.items.map((obj)=>{
      const {id}=obj;
      const{channelTitle, title}=obj?.snippet;
      const {description}=obj?.snippet?.localized;
      const {likeCount,viewCount}=obj?.statistics;
      return { [id]:{channelTitle,title,description,likeCount,viewCount}}

    })
    const mergeData=mergedObjects(videoData)
    dispatch(addVideos(mergeData))
            
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
         <>
         <button
            className={`${isMenuOpen ? "w-[87%]" : "w-full"} px-3 py-1 m-1 border border-gray-300 rounded-lg hover:bg-gray-500`}
            onClick={() => setVideosVisible(contentVideos.length)}
        >
          <h1 className='font-light'>Load More</h1>
        </button>
        <div className={` ml-1 mt-0 m-1 border  border-b-2 border-gray-300 ${isMenuOpen ? "w-[87%]" : "w-full"}`}></div>
        </>
      )}
    </div>
    
    ):(<ExploreContentShimmer/>)}
    </>
  )
  
}

export default useContent