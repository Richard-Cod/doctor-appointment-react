function MsgAttachments() {
    return (
        <div className="chat-msg-attachments">
            <div className="chat-attachment">
                <img src="assets/img/img-02.jpg" alt="Attachment" />
                <div className="chat-attach-caption">placeholder.jpg</div>
                <a href="#" className="chat-attach-download">
                <i className="fas fa-download" />
                </a>
            </div>
            <div className="chat-attachment">
                <img src="assets/img/img-03.jpg" alt="Attachment" />
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




function ChatBody() {
    return (
        <div className="chat-body">
                  <div className="chat-scroll">
                    <ul className="list-unstyled">
                      <li className="media sent">
                        <div className="media-body">
                          <MsgBox />
                        </div>
                      </li>
                      <li className="media received">
                        <div className="avatar">
                          <img src="assets/img/patients/patient.jpg" alt="User Image" className="avatar-img rounded-circle" />
                        </div>
                        <div className="media-body">
                        <MsgBox />
                        <MsgBox attachments={1} />
                        </div>
                      </li>
                      <li className="media sent">
                        <div className="media-body">
                        <MsgBox />
                        <MsgBox attachments={1} />
                         
                        </div>
                      </li>
                      <li className="media received">
                        <div className="avatar">
                          <img src="assets/img/patients/patient.jpg" alt="User Image" className="avatar-img rounded-circle" />
                        </div>
                        <div className="media-body">
                          <MsgBox />
                        </div>
                      </li>
                      <ChatDate />
                      <li className="media received">
                        <div className="avatar">
                          <img src="assets/img/patients/patient.jpg" alt="User Image" className="avatar-img rounded-circle" />
                        </div>
                        <div className="media-body">
                          <MsgBox editable={true} />
                        </div>
                      </li>
                      <li className="media sent">
                        <div className="media-body">
                          <MsgBox editable={true} />
                        </div>
                      </li>
                      <li className="media received">
                        <div className="avatar">
                          <img src="assets/img/patients/patient.jpg" alt="User Image" className="avatar-img rounded-circle" />
                        </div>
                        <IsWrittingComponent />
                      </li>
                    </ul>
                  </div>
                </div>
    )
}

export default ChatBody
