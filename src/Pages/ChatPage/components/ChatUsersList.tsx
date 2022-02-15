import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../../app/store"
import { Contact } from "../../../logic/models/Contact"
import ChatPageVM from "../../../logic/viewModels/ChatPageVM"
import { setContacts } from "../../../redux/chatWithDoctor/chatWithDoctor"
import ChatLeftItem from "./ChatLeftItem"

// import ChatPageVM from "../../../logic/ChatPageVM/index"
const chatPageVM = new ChatPageVM()

function ChatUsersList({contactList} : {contactList : Contact[] | undefined}) {
    
    return (
        <div className="chat-users-list">
            <div className="chat-scroll">
                {/* {loading && <h1>Loading ... </h1> } */}
                {!contactList && <h3 className="ml-4">Pas de contact </h3> } 
                {contactList && contactList.map((item , i) => <ChatLeftItem key={i} item={item} />)}
            </div>
        </div>
    )
}

export default ChatUsersList
