import React from 'react'
import {useSelector} from "react-redux"
import useContent from './helper/useContent'
import { Sports_API } from './Constants'

const Sports = () => {
  const isMenuOpen=useSelector(store=>store.app.isMenuOpen)
  const sports=useContent(Sports_API,3)
  React.useEffect(()=>{
    getVideos()
  })
  const getVideos=async()=>{
    const videos= await fetch(Sports_API)
    const data= await videos.json()
    console.log(data)
  }
  return (
    <div className="flex flex-col">
    <div className={`${isMenuOpen? 'w-[87%]': 'w-full'} text-center rounded-lg mt-14`}>
        <div className="bg-gray-500 pb-6 pt-6  text-gray-100">
            <h1  className='font-bold '>Sports</h1>
            <h3 className="font-thin"> Watch the Latest and Greatest hits</h3>
        </div>
        
        <hr></hr>
    </div>
    {sports}
    </div>

  )
}

export default Sports