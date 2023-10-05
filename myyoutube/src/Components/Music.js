import React from 'react'
import { Music_API} from './Constants'
import { Music_API_US } from './Constants'
import { Music_API_FR} from './Constants'
import useContent from './helper/useContent'
const Music = () => {
  

  const Popular_Music=useContent(Music_API,1,"popularMusic")
  const English_Music=useContent(Music_API_US,1,"englishMusic")
  const FR_Music= useContent(Music_API_FR,1,"frenchMusic")
  return(
    <div>
      {Popular_Music}
      {English_Music}
      {FR_Music}
      
    </div>

  )
  }
export default Music