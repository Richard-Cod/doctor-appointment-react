import ChatBody from "../components/ChatBody"
import ChatHeader from "../components/ChatHeader"
import ChatFooter from "../components/ChatFooter"
import SearchChatForm from "../components/SearchChatForm"
import ChatUsersList from "../components/ChatUsersList"
import BaseLayout from "../../../templates/layout/BaseLayout"
import {useEffect} from "react"
import { setContactMessage, setContacts } from "../../../redux/chatWithDoctor/chatWithDoctor"
import ChatWithPatientsVM from "../../../logic/viewModels/ChatPageVM/chatWithPatients"
import { useAppDispatch, useAppSelector } from "../../../app/hooks"


const chatPageVM = new ChatWithPatientsVM()

function ChatPage() {
  const dispatch = useAppDispatch()
  const contactList = useAppSelector(s => s.chatWithDoctor.contacts)
  const currentChattingUser = useAppSelector(s => s.chatWithDoctor.currentChattingUser)
  const contactListFiltered = useAppSelector(s => s.chatWithDoctor.contactsFiltered)
  const contactMessages = useAppSelector(s => s.chatWithDoctor.contactMessages)
  
    useEffect(() => {
        const asyncFunc = async () => {
            const result = await chatPageVM.getDoctorContacts()
            dispatch(setContacts(result))
        }
        asyncFunc()
    }, [])

    useEffect(() => {
      const asyncFunc = async () => {
        if(currentChattingUser){
          const result = await chatPageVM.getContactMessages(currentChattingUser.id);
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
                  <span>Chats with patients</span>
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
                  <ChatBody messages={contactMessages} currentChattingUser={currentChattingUser}  />
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
