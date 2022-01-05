
function ChatHeader() {
  const user = {
    id : 2,
    username : "Richard Bathiebo",
    lastMessage : "Salut comment ça va ?",
    unseenMessageCount : 15,
    createdAt : "8h:01 PM",
    profilePic : "assets/img/patients/patient2.jpg",
}
    return (
        <div className="chat-header">
                  <a id="back_user_list" href="javascript:void(0)" className="back-user-list">
                    <i className="material-icons">chevron_left</i>
                  </a>
                  <div className="media">
                    <div className="media-img-wrap">
                      <div className={`avatar ${!user.online && "avatar-online"}`}>
                        <img src="assets/img/patients/patient.jpg" alt="User Image" className="avatar-img rounded-circle" />
                      </div>
                    </div>
                    
                    <div className="media-body">
                      <div className="user-name">{user.username}</div>
                      {!user.online && <div className="user-status">online</div>}
                    </div>
                  </div>
                  <div className="chat-options">
                    <a href="javascript:void(0)" data-toggle="modal" data-target="#voice_call">
                      <i className="material-icons">local_phone</i>
                    </a>
                    <a href="javascript:void(0)" data-toggle="modal" data-target="#video_call">
                      <i className="material-icons">videocam</i>
                    </a>
                    <a href="javascript:void(0)">
                      <i className="material-icons">more_vert</i>
                    </a>
                  </div>
        </div>
    )
}

export default ChatHeader