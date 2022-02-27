import React from "react"
import { formatImageFromBackend } from "../../../logic/helper/getImageFromBackend"
import { Message } from "../../../logic/models/Message"
import { User } from "../../../logic/models/User"
import ChatPageVM from "../../../logic/viewModels/ChatPageVM/ChatWithDoctorPageVM"


function MsgAttachments() {
    return (
        <div className="chat-msg-attachments">
            <div className="chat-attachment">
                <img src="/assets/img/img-02.jpg" alt="Attachment" />
                <div className="chat-attach-caption">placeholder.jpg</div>
                <a href="#" className="chat-attach-download">
                <i className="fas fa-download" />
                </a>
            </div>
            <div className="chat-attachment">
                <img src="/assets/img/img-03.jpg" alt="Attachment" />
                <div className="chat-attach-caption">placeholder.jpg</div>
                <a href="#" className="chat-attach-download">
                <i className="fas fa-download" />
                </a>
            </div>
        </div>
    )
}

function MsgBox({message, attachments , editable} : {message :Message,attachments : any , editable : any}) {
    return (
        <div className="msg-box">
            <div>
                <p>{message.content}</p>
                {attachments && <MsgAttachments />}
                <ul className="chat-msg-info">
                <li>
                    <div className="chat-time">
                    <span>{message.created_at}</span>
                    </div>
                </li>
                { editable && <li><a href="#">Edit</a></li>}

                </ul>
            </div>
        </div>
    )
}

function ChatDate() {
    return (
        <li className="chat-date">Today</li>
    )
}


function IsWrittingComponent({profile_pic} : {profile_pic:string}) {
    return (
      <li className="media received">
          <div className="avatar">
            <img src={formatImageFromBackend(profile_pic)} alt="User Image" className="avatar-img rounded-circle" />
          </div>
          <div className="media-body">
            <div className="msg-box">
              <div>
                <div className="msg-typing">
                  <span />
                  <span />
                  <span />
                </div>
              </div>
            </div>
          </div>
        </li>

        
    )
}

// const chatPageVM = new ChatPageVM()
function ChatBody({messages , currentChattingUser} : {messages : Message[] ,currentChattingUser : User }) {

    const showMessages = (currentUserId : number | string) => {
        return messages.map((message , i) => {
                return  <li key={i} className={`media ${currentUserId != message.sender.id ? "sent" : "received"}`} >
                            {currentUserId == message.sender.id && <div className="avatar">
                            <img src={formatImageFromBackend(currentChattingUser.profile_pic)} alt="User Image" className="avatar-img rounded-circle" />
                            </div>
                            }
                            <div className="media-body">
                                <MsgBox message={message} attachments={null} editable={undefined} />
                                {/* <MsgBox attachments={message.attachments} editable={undefined} /> */}
                            </div>
                         </li>
        })
    
    }

    return (
        <div className="chat-body">
                {/* {loading && <h1>Loading ... </h1> } */}
                  <div className="chat-scroll">
                    { messages && <ul className="list-unstyled">
                        {showMessages(currentChattingUser.id)}
                      <ChatDate />
                        <IsWrittingComponent profile_pic={currentChattingUser.profile_pic} />
                    </ul>}
                  </div>
                </div>
    )
}

export default ChatBody
