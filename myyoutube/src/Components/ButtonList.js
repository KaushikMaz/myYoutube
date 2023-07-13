import React from 'react'
import Button from "./Button"
import { Button_Contents } from './Constants'

const ButtonList = () => {
  return (
    <div className="flex whitespace-nowrap cursor-pointer w-auto">
      {Button_Contents.map((button,index)=><Button key={index} name={button}/>)}
    </div>
  )
}

export default ButtonList