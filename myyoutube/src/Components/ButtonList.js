import React from 'react'
import Button from "./Button"
import { Video_CategoriesAPI } from './Constants'
import {useSelector } from 'react-redux'
import { ButtonShimmer } from './helper/Shimmer'

const ButtonList = () => {
  const isMenuOpen=useSelector(store=>store.app.isMenuOpen)
  const [videoCategoryData,setVideoCategoryData]=React.useState([])
  React.useEffect(()=>{
    getVideoCategories()
},[])

const getVideoCategories=async()=>{
  
    const response=await fetch(Video_CategoriesAPI)
    const jsondata=await response.json()
    setVideoCategoryData(jsondata?.items)
    // console.log(jsondata?.items)
  
  }
  
// console.log(videoCategoryData)
  return (
    <div className={`fixed z-1 w-screen  top-10 md:top-14 ${isMenuOpen?'md:left-[15rem] md:w-[61rem]':'md:left-6 md:w-[95%]'} bg-white`}>
    <div className=" flex overflow-x-scroll no-scrollbar">
    <div className="flex cursor-pointer whitespace-nowrap space-x-1 md:space-x-2 "   >
      {videoCategoryData.length>0? (videoCategoryData.map(d=><Button key={d.id} name={d}/>)):(<ButtonShimmer/>)}
    </div>
    </div>
    </div>
  )
}

export default ButtonList