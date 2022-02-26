import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../../app/store"
import { formatImageFromBackend } from "../../../logic/helper/getImageFromBackend"
import { Contact } from "../../../logic/models/Contact"
import { setCurrentChattingUser } from "../../../redux/chatWithDoctor/chatWithDoctor"

function ChatLeftItem({item} : {item : Contact}) {
  const currentChattingUser = useSelector((state: RootState) => state.chatWithDoctor.currentChattingUser)

  const dispatch = useDispatch()

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    console.log("aaaa")
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
            <div className="user-name text-left">{item.user.first_name + " " + item.user.last_name}</div>
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