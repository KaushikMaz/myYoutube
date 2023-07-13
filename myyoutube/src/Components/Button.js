import React from 'react'

const Button = ({name}) => {
  return (
    <div className="px-3 py-1 m-1 border border-gray-300 bg-gray-300 rounded-lg">
        {name}
    </div>
  )
}

export default Button