import ChatMessage from "./ChatMessage"
const LiveChat=()=>{
    return (
        <div className="ml-10 pl-2 mr-20 flex-1 h-[400px] border border-black bg-slate-100 rounded-lg">
            <p>LiveChat</p>
            <ChatMessage name={"Kaushik Mazumdar"} text={"This Live Chat is good to use "}/>
            <ChatMessage name={"Raj Sharma"} text={"Lets do it "}/>

        </div>
    )
}

export default LiveChat;