import { useAppDispatch, useAppSelector } from "../../../app/hooks"
import { formatFullname } from "../../../logic/helper/formatFullname"
import { formatImageFromBackend } from "../../../logic/helper/getImageFromBackend"
import { Contact } from "../../../logic/models"
import { setCurrentChattingUser } from "../../../redux/chatWithDoctor/chatWithDoctor"

function ChatLeftItem({item} : {item : Contact}) {
  
  const currentChattingUser = useAppSelector((s) => s.chatWithDoctor.currentChattingUser)

  const dispatch = useAppDispatch()

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    dispatch(setCurrentChattingUser(item.user))
  }
    return (
        <a style={{backgroundColor: currentChattingUser?.id == item.user.id ? "#ccc" : "white"}} onClick={handleClick} className="media read-chat active ">
        <div className="media-img-wrap">
          <div className={`avatar ${true && "avatar-online"}`}>
            <img src={formatImageFromBackend(item.user.profile_pic)} alt="User Image" className="avatar-img rounded-circle" />
          </div>
        </div>
        <div className="media-body">
          <div>
            <div className="user-name text-left">{formatFullname(item.user)}</div>
            <div className="user-last-chat">{item.lastMessage.content}</div>
          </div>
          <div>
            <div className="last-chat-time block">{item.lastMessage.created_at}</div>
          </div>
        </div>
      </a>
    )
}

export default ChatLeftItem