import React from 'react'
import Button from "./Button"
import { Button_Contents } from './Constants'
import {useSelector } from 'react-redux'

const ButtonList = () => {
  const isMenuOpen=useSelector(store=>store.app.isMenuOpen)
  return (
    <div className={`flex whitespace-nowrap w-full cursor-pointer fixed top-14 ${isMenuOpen?'left-[12rem]':'left-4'} bg-white`}>
      {Button_Contents.map((button,index)=><Button key={index} name={button}/>)}
    </div>
  )
}

export default ButtonList