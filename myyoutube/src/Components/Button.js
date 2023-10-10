import React from 'react'

const Button = ({name}) => {
  const {title}=name.snippet
  
  return (
    <div className=" ml-0 p-1 my-1 text-sm md:text-base md:px-3 md:py-1 md:m-1 border border-gray-300 bg-gray-300 rounded-lg">
        {title}
    </div>
  )
}

export default Button