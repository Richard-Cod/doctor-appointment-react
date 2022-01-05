function ChatLeftItem({item}) {
    return (
        <a href="javascript:void(0);" className="media read-chat active">
        <div className="media-img-wrap">
          <div className={`avatar ${item.online && "avatar-online"}`}>
            <img src={item.profilePic} alt="User Image" className="avatar-img rounded-circle" />
          </div>
        </div>
        <div className="media-body">
          <div>
            <div className="user-name text-left">{item.username}</div>
            <div className="user-last-chat">{item.lastMessage}</div>
          </div>
          <div>
            <div className="last-chat-time block">{item.createdAt}</div>
          </div>
        </div>
      </a>
    )
}

export default ChatLeftItem