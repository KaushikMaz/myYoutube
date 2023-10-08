import React from 'react'
import {News_API} from "./Constants"
import { News_API_US } from './Constants'
import useContent from './helper/useContent'


const News = () => {
  
  const Popular_News=useContent(News_API,1,"popularNews")
  const English_News =useContent(News_API_US,1,"englishNews")
  
  return (
    <div>
      {Popular_News}
      {English_News}
      
    </div>
  )
}

export default News