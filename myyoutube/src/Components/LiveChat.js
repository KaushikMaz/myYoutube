import ChatMessage from "./ChatMessage"
import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { addLiveMessages } from "./utils/chatSlice"
import { generateRandomName, generateRandomString } from "./Constants"
const LiveChat=()=>{
    const dispatch=useDispatch()
    const liveChatMessages= useSelector(store=>store.liveChat.liveMessages)
    const [inputChat,setInputChat]=React.useState("")
    


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
        
        <div className="ml-10 pl-2 pb-1 mr-20 flex-1  border border-black bg-slate-100  rounded-lg ">
            <div className="flex flex-col-reverse h-[380px] py-2 overflow-y-scroll">
            {liveChatMessages.map((c,index)=><ChatMessage key={index} name={c.name} text={c.text}/>)}
            </div>
            <form onSubmit={(e)=>{
                e.preventDefault()
                setInputChat(" ")
                dispatch(addLiveMessages({
                    name:"Kaushik Mazumdar",
                    text:inputChat

                }))

            }}>
                <input  className="w-3/4 p-1 pl-1 border border-b-0" value={inputChat} onChange={(e)=>setInputChat(e.target.value)}type="text"/>
                <button className="w-1/4 border border-b-0 p-1">Send</button>
            </form>
           
        </div>
        
        
    )
}

export default LiveChat;