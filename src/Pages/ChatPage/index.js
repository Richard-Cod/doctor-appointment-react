import ChatBody from "./components/ChatBody"
import ChatHeader from "./components/ChatHeader"
import ChatLeftItem from "./components/ChatLeftItem"
import ChatFooter from "./components/ChatFooter"
import SearchChatForm from "./components/SearchChatForm"

const data = [
    {
        id : 1 ,
        username : "Sarah Wilson",
        lastMessage : "Hey , How are youffvfvfvdfvdfvdfvdfvdfvdvdfvfdvdvf ?",
        unseenMessageCount : 15,
        createdAt : "8h:01 PM",
        profilePic : "assets/img/patients/patient1.jpg",
    },
    {
        id : 2,
        username : "Richard Bathiebo",
        lastMessage : "Salut comment ça va ?",
        unseenMessageCount : 15,
        createdAt : "8h:01 PM",
        profilePic : "assets/img/patients/patient2.jpg",
    }
]

const messageData = [
    {
        userId : 2,
        content : "Salut que puis je faire pour toi ?",
        createdAt : "8h:01 PM",
    }
]



function ChatPage() {
    return (
      <div className="content">
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-12">
            <div className="chat-window">
              {/* Chat Left */}
              <div className="chat-cont-left">
                <div className="chat-header">
                  <span>Chats</span>
                  <a href="javascript:void(0)" className="chat-compose">
                    <i className="material-icons">control_point</i>
                  </a>
                </div>
                <SearchChatForm />
                <div className="chat-users-list">
                  <div className="chat-scroll">
                    {data.map((item) => <ChatLeftItem item={item} />)}
                  </div>
                </div>
              </div>
              {/* /Chat Left */}
              {/* Chat Right */}
              <div className="chat-cont-right">
                <ChatHeader user={data[1]} />
                <ChatBody />
                <ChatFooter />
              </div>
              {/* /Chat Right */}
            </div>
          </div>
        </div>
        {/* /Row */}
      </div>
    </div>		
    )
}

export default ChatPage
