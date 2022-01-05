import ChatBody from "./components/ChatBody"
import ChatHeader from "./components/ChatHeader"
import ChatFooter from "./components/ChatFooter"
import SearchChatForm from "./components/SearchChatForm"
import ChatUsersList from "./components/ChatUsersList"
import BaseLayout from "../../templates/layout/BaseLayout"


function ChatPage() {
    return (
      <BaseLayout>
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
                <ChatUsersList />
              </div>
              {/* /Chat Left */}
              {/* Chat Right */}
              <div className="chat-cont-right">
                <ChatHeader />
                <ChatBody />
                {/* <ChatFooter /> */}
              </div>
              {/* /Chat Right */}
            </div>
          </div>
        </div>
        {/* /Row */}
      </div>
    </div>	
    </BaseLayout>	
    )
}

export default ChatPage
