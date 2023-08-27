import React from 'react'
import { useSelector } from 'react-redux'
import { Music_API} from './Constants'
import { Music_API_US } from './Constants'
import { Music_API_FR} from './Constants'
import useContent from './helper/useContent'
const Music = () => {
  const isMenuOpen= useSelector(store=>store.app.isMenuOpen)

  const Popular_Music=useContent(Music_API,1)
  const English_Music=useContent(Music_API_US,1)
  const FR_Music= useContent(Music_API_FR,1)
  return(
    <div>
      {Popular_Music}
      <hr className={`${isMenuOpen ? "w-[85%]" : "w-full"} p-1 m-1 `}></hr>
      {English_Music}
      <hr className={`${isMenuOpen ? "w-[85%]" : "w-full"} p-1 m-1`}></hr>
      {FR_Music}
      
    </div>

  )
  }
export default Music