import React from 'react'
import Sidebar from './Sidebar'
import Maincomponent from './Maincomponent'

const Body = () => {
  return (
    <div className="grid grid-flow-col" >
        <Sidebar/>
        <Maincomponent/>
    </div>
  )
}

export default Body