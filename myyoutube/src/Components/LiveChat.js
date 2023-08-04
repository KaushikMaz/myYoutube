import ChatMessage from "./ChatMessage"
import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { addLiveMessages } from "./utils/chatSlice"
import { generateRandomName, generateRandomString } from "./Constants"
const LiveChat=()=>{
    const dispatch=useDispatch()
    const liveChatMessages= useSelector(store=>store.liveChat.liveMessages)


    React.useEffect(()=>{
        const id=setInterval(()=>{
            // console.log("APi Polling")
            dispatch(addLiveMessages({
                name:generateRandomName(),
                text:generateRandomString() +" "+ generateRandomString()
            }))

        },2000)

        return()=>{
            clearInterval(id)
        }
    },[])

    return (
        <div className="ml-10 pl-2 mr-20 flex-1 h-[400px] border border-black bg-slate-100 flex flex-col-reverse rounded-lg overflow-y-scroll">
            {liveChatMessages.map((c,index)=><ChatMessage key={index} name={c.name} text={c.text}/>)}
           
        </div>
        
    )
}

export default LiveChat;