import {useEffect} from "react"

import {ChatBody,ChatHeader,ChatFooter,SearchChatForm,ChatUsersList} from './'

import BaseLayout from "../../../templates/layout/BaseLayout"
import { setContactMessage, setContacts } from "../../../redux/chatWithDoctor/chatWithDoctor"
import { useAppDispatch, useAppSelector } from "../../../app/hooks"
import { ChatPageVM, ChatWithDoctorPageVM , ChatWithPatientsVM } from "../../../logic/viewModels"
import { selectChatPageVM, selectchatWithDoctorPageVM, selectchatWithPatientsPageVM } from "../../../redux/viewmodels/viewmodels"




function MainChatCmp({isChattingWithPatients = false} : {isChattingWithPatients : boolean}) {
  const dispatch = useAppDispatch()
  const contactList = useAppSelector(s => s.chatWithDoctor.contacts)
  const currentChattingUser = useAppSelector(s => s.chatWithDoctor.currentChattingUser)
  const contactListFiltered = useAppSelector(s => s.chatWithDoctor.contactsFiltered)
  const contactMessages = useAppSelector(s => s.chatWithDoctor.contactMessages)

  const chatPageVM = useAppSelector(selectChatPageVM)
  const chatWithDoctorPageVM = useAppSelector(selectchatWithDoctorPageVM)
  const chatWithPatientPageVM = useAppSelector(selectchatWithPatientsPageVM)

  
    useEffect(() => {
        const asyncFunc = async () => {
            const resultPromise = isChattingWithPatients ? chatWithPatientPageVM.getDoctorContacts() : chatWithDoctorPageVM.getPatientContacts()
            const result = await resultPromise
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

export default MainChatCmp
