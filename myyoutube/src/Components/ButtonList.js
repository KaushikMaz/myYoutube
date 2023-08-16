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
    <div className={`flex whitespace-nowrap w-full cursor-pointer fixed top-14 ${isMenuOpen?'left-[12rem]':'left-4'} bg-white`}>
      {videoCategoryData.length>0? (videoCategoryData.map(d=><Button key={d.id} name={d}/>)):(<ButtonShimmer/>)}
    </div>
  )
}

export default ButtonList