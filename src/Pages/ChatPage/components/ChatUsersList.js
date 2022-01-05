import React, { useEffect } from "react"
import ChatPageVM from "../../../logic/ChatPageVM"
import ChatLeftItem from "./ChatLeftItem"

// import ChatPageVM from "../../../logic/ChatPageVM/index"
const chatPageVM = new ChatPageVM()

function ChatUsersList() {
    const [data, setdata] = React.useState()
    const [loading, setloading] = React.useState(true)
    useEffect(() => {
        const asyncFunc = async () => {
            const result = await chatPageVM.getContacts()
            setdata(result)
            setloading(false)
        }
        asyncFunc()
    }, [])
    return (
        <div className="chat-users-list">
            <div className="chat-scroll">
                {loading && <h1>Loading ... </h1> }
                {data && data.map((item) => <ChatLeftItem item={item} />)}
            </div>
        </div>
    )
}

export default ChatUsersList
