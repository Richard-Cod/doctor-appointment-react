import React from "react"
import { Message } from "../../../logic/models/Message"
import ChatPageVM from "../../../logic/viewModels/ChatPageVM"


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
                    <span>{message.createdAt}</span>
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

function IsWrittingComponent() {
    return (
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
    )
}

const chatPageVM = new ChatPageVM()
function ChatBody({messages , currentChattingUserId} : {messages : Message[] ,currentChattingUserId : number | string }) {

    const showMessages = (currentUserId : number | string) => {
        return messages.map((message , i) => {
                return  <li key={i} className={`media ${currentUserId == message.user.user_id ? "sent" : "received"}`} >
                            {currentUserId != message.user.user_id && <div className="avatar">
                            <img src={message.user.profile_pic} alt="User Image" className="avatar-img rounded-circle" />
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
                        {showMessages(currentChattingUserId)}
                      <ChatDate />
                      <li className="media received">
                        <div className="avatar">
                          <img src="/assets/img/patients/patient.jpg" alt="User Image" className="avatar-img rounded-circle" />
                        </div>
                        <IsWrittingComponent />
                      </li>
                    </ul>}
                  </div>
                </div>
    )
}

export default ChatBody
