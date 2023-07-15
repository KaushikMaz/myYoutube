import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleMenuOff } from './utils/appSlice'

const WatchPage = () => {
    const dispatch=useDispatch();
    React.useEffect(()=>{
        dispatch(toggleMenuOff())
    },[])
  return (
    <div>WatchPage</div>
  )
}

export default WatchPage