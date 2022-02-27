import { Contact } from "../../../logic/models"
import ChatLeftItem from "./ChatLeftItem"


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
