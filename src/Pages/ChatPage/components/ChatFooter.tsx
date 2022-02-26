import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../../app/store"
import { Message } from "../../../logic/models/Message"
import ChatPageVM from "../../../logic/viewModels/ChatPageVM"
import { addNewMessage } from "../../../redux/chatWithDoctor/chatWithDoctor"

const chatPageVM = new ChatPageVM()


function ChatFooter() {
    const user = useSelector((state: RootState) => state.user.value)
    const currentChattingUser = useSelector((state: RootState) => state.chatWithDoctor.currentChattingUser)
    const dispatch = useDispatch()

    const [inputContent, setinputContent] = useState("second")
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setinputContent(e.currentTarget.value)
    }

    function updateStateForNewMessage(message : Message) {
            dispatch(addNewMessage(message))
    }
    const handleClick = () => {
        if(currentChattingUser && user){
            console.log(user)
            const msg: Message = {
                sender: user,
                content: inputContent,
                created_at: new Date().toDateString(),
                updated_at: new Date().toDateString(),
                receiver: currentChattingUser,
                receiverID: currentChattingUser.id,
                senderID: user.id
            }
      
    
            chatPageVM.saveMessage(msg)
            updateStateForNewMessage(msg)
        }
        
    }
    return (
        <div className="chat-footer">
            <div className="input-group">
            <div className="input-group-prepend">
                <div className="btn-file btn">
                <i className="fa fa-paperclip" />
                <input type="file" />
                </div>
            </div>
            <input onKeyPress={(e) => e.key === 'Enter' && handleClick()} onChange={handleChange} value={inputContent} type="text" className="input-msg-send form-control" placeholder="Type something" />
            <div className="input-group-append">
                <button onClick={handleClick} type="button" className="btn msg-send-btn"><i className="fab fa-telegram-plane" /></button>
            </div>
            </div>
        </div>
    )
}

export default ChatFooter
