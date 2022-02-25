import ChatBody from "./components/ChatBody"
import ChatHeader from "./components/ChatHeader"
import ChatFooter from "./components/ChatFooter"
import SearchChatForm from "./components/SearchChatForm"
import ChatUsersList from "./components/ChatUsersList"
import BaseLayout from "../../templates/layout/BaseLayout"
import { RootState } from "../../app/store"
import { useDispatch, useSelector } from "react-redux"
import React , {useEffect, useState} from "react"
import ChatPageVM from "../../logic/viewModels/ChatPageVM"
import { setContactMessage, setContacts } from "../../redux/chatWithDoctor/chatWithDoctor"

const chatPageVM = new ChatPageVM()

function ChatPage() {
  const contactList = useSelector((state: RootState) => state.chatWithDoctor.contacts)
  const currentChattingUser = useSelector((state: RootState) => state.chatWithDoctor.currentChattingUser)
  const contactListFiltered = useSelector((state: RootState) => state.chatWithDoctor.contactsFiltered)
  const contactMessages = useSelector((state: RootState) => state.chatWithDoctor.contactMessages)
  
  const dispatch = useDispatch()

    useEffect(() => {
        const asyncFunc = async () => {
            const result = await chatPageVM.getContacts()
            dispatch(setContacts(result))
        }
        asyncFunc()
    }, [])

    useEffect(() => {
      const asyncFunc = async () => {
        if(currentChattingUser){
          const result = await chatPageVM.getContactMessages(currentChattingUser.user_id);
          dispatch(setContactMessage(result))
        }
      }
      asyncFunc()
  }, [currentChattingUser])
    
    return (
      <BaseLayout>
      <div className="content">
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-12">
            <div className="chat-window">
              {/* Chat Left */}
              <div className="chat-cont-left">
                <div className="chat-header">
                  <span>Chats</span>
                  <a href="" className="chat-compose">
                    <i className="material-icons">control_point</i>
                  </a>
                </div>
                <SearchChatForm contactList={contactList} />
                <ChatUsersList contactList={contactListFiltered} />
              </div>
              {/* /Chat Left */}
              {/* Chat Right */}
              <div className="chat-cont-right">
                {!currentChattingUser && !contactMessages && <h6 className="ml-4">Choose someone</h6>}
                {currentChattingUser && contactMessages && <div>
                  <ChatHeader user={currentChattingUser} />
                  <ChatBody messages={contactMessages} currentChattingUserId={currentChattingUser.user_id}  />
                  <ChatFooter />
                  </div>
                  }
              </div>
              {/* /Chat Right */}
            </div>
          </div>
        </div>
        {/* /Row */}
      </div>
    </div>	
    </BaseLayout>	
    )
}

export default ChatPage
