import React from 'react'
import VideoCard from '../VideoCard'
import { useSelector } from 'react-redux/'
import {Link} from "react-router-dom"


const useMusic = (API) => {
  const[ musicVideos,setMusicVideos]=React.useState([])
  const isMenuOpen= useSelector(store=>store.app.isMenuOpen)
  const videosPerRow = isMenuOpen ? 3 : 4;
  const initialRows=1;
  const InitialVideos=videosPerRow*initialRows
  const [videosVisible, setVideosVisible] = React.useState(InitialVideos);


  React.useEffect(()=>{
    getMusicVideos()
    
  },[])

  const getMusicVideos=async()=>{
    const response=await fetch(API)
    const jsonData= await response.json()
    setMusicVideos(jsonData?.items)
        
  }

  React.useEffect(() => {
    // Update videosVisible when isMenuOpen changes, but only if it's not equal to the total number of videos
    if (videosVisible !== musicVideos.length) {
      const updatedVideosPerRow = isMenuOpen ? 3 : 4;
      setVideosVisible(updatedVideosPerRow * initialRows);
    }
  }, [isMenuOpen, videosVisible, initialRows, musicVideos.length]);


  return (
    <div className={`font-bold ${isMenuOpen ? "ml-48" : "ml-4"} mt-[4rem] flex flex-wrap`}>
     {musicVideos.slice(0,videosVisible).map(video => (
        <Link key={video.id} to={"/watch?v=" + video.id}>
          <VideoCard info={video} />
        </Link>
        ))}
      {videosVisible < musicVideos.length && (
         <button
            className={`${isMenuOpen ? "w-[85%]" : "w-full"} px-3 py-1 m-1 border border-gray-300 rounded-lg hover:bg-gray-500`}
            onClick={() => setVideosVisible(musicVideos.length)}
        >
          <h1 className='font-light'>Load More</h1>
        </button>
      )}
    </div>
    
  )
}

export default useMusic