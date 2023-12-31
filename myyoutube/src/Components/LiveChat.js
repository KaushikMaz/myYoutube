import ChatMessage from "./ChatMessage"
import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { addLiveMessages } from "./utils/chatSlice"
import { generateRandomName, generateRandomString } from "./Constants"
const LiveChat=()=>{
    const dispatch=useDispatch()
    const liveChatMessages= useSelector(store=>store.liveChat.liveMessages)
    const [inputChat,setInputChat]=React.useState("")
    const [showChat,setShowChat]= React.useState(true)
    const handleToggleClick = () => {
        setShowChat(prevState=>!prevState);
      };
    


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
        <div className="flex-1 w-[23.5rem] mx-2 md:w-[33rem] md:absolute md:top-[5rem] md:left-[52rem] ">
            <div className="md:ml-10 md:pb-1 md:mr-20 border  border-black bg-slate-100  rounded-lg ">
                <button onClick={handleToggleClick} className="px-1 md:p-1 text-sm md:text-base w-full text-center border-black ">{showChat?"Hide Chat":"Show Chat"}</button>
            </div>
            {showChat && 
            <div className="md:ml-10  md:pb-1 md:mr-20 border border-t-0 border-black bg-slate-100  rounded-lg ">
                    <div className="flex flex-col-reverse h-[14rem] md:h-[22rem] pt-7 pl-2 overflow-y-scroll">
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
    }
        </div>
    )
}

export default LiveChat;