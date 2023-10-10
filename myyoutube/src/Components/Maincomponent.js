import React from 'react'
import ButtonList from './ButtonList'
import VideoContainer from './VideoContainer'

const Maincomponent = () => {
  return (
    <div className=" w-screen md:col-span-10">
      <ButtonList/>
      <VideoContainer/>
    </div>
  )
}

export default Maincomponent