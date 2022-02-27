import { formatFullname } from "../../../logic/helper/formatFullname"
import { formatImageFromBackend } from "../../../logic/helper/getImageFromBackend"
import { User } from "../../../logic/models"

function ChatHeader({user} : {user : User}) {
    return (
        <div className="chat-header">
                  <a id="back_user_list" href="" className="back-user-list">
                    <i className="material-icons">chevron_left</i>
                  </a>
                  <div className="media">
                    <div className="media-img-wrap">
                      <div className={`avatar ${true && "avatar-online"}`}>
                        <img src={formatImageFromBackend(user.profile_pic)} alt="User Image" className="avatar-img rounded-circle" />
                      </div>
                    </div>
                    
                    <div className="media-body">
                      <div className="user-name">{user.email} {user.id}</div>
                      {true && <div className="user-status">online</div>}
                    </div>
                  </div>
                  <div className="chat-options">
                    <a href="" data-toggle="modal" data-target="#voice_call">
                      <i className="material-icons">local_phone</i>
                    </a>
                    <a href="" data-toggle="modal" data-target="#video_call">
                      <i className="material-icons">videocam</i>
                    </a>
                    <a href="">
                      <i className="material-icons">more_vert</i>
                    </a>
                  </div>
        </div>
    )
}

export default ChatHeader