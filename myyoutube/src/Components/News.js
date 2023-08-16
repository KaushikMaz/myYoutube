import React from 'react'
import {News_API} from "./Constants"
import { News_API_US } from './Constants'
import useContent from './helper/useContent'
import { useSelector } from 'react-redux'

const News = () => {
  const isMenuOpen= useSelector(store=>store.app.isMenuOpen)
  const Popular_News=useContent(News_API)
  const English_News =useContent(News_API_US)
  
  return (
    <div>
      {Popular_News}
      <hr className={`${isMenuOpen ? "w-[85%]" : "w-full"} p-2`}></hr>
      {English_News}
      <hr className={`${isMenuOpen ? "w-[85%]" : "w-full"} p-2`}></hr>
    </div>
  )
}

export default News