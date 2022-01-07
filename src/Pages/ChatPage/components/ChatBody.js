import React from "react"
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

function MsgBox({attachments , editable}) {
    return (
        <div className="msg-box">
            <div>
                <p>Hello. What can I do for you?</p>
                {attachments && <MsgAttachments />}
                <ul className="chat-msg-info">
                <li>
                    <div className="chat-time">
                    <span>8:30 AM</span>
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
function ChatBody() {
    const [data, setdata] = React.useState()
    const [loading, setloading] = React.useState(true)

    React.useEffect(() => {
        const asyncFunc = async () => {
            const result = await chatPageVM.getContactMessages()
            setdata(result)
            setloading(false)
        }
        asyncFunc()
    }, [])


    const showMessages = (currentUserId) => {
        return data.map((message) => {
                return  <li className={`media ${currentUserId == message.userId ? "sent" : "received"}`} >
                            {currentUserId != message.userId && <div className="avatar">
                            <img src="/assets/img/patients/patient.jpg" alt="User Image" className="avatar-img rounded-circle" />
                            </div>
                            }
                            <div className="media-body">
                                <MsgBox attachments={message.attachments} />
                            </div>
                         </li>
        })
    
    }

    return (
        <div className="chat-body">
                {loading && <h1>Loading ... </h1> }
                  <div className="chat-scroll">
                    { data && <ul className="list-unstyled">
                        {showMessages(1)}
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
