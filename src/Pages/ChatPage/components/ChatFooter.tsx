import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../../app/store"
import { Message } from "../../../logic/models/Message"
import ChatPageVM from "../../../logic/viewModels/ChatPageVM"
import { addNewMessage } from "../../../redux/chatWithDoctor/chatWithDoctor"

const chatPageVM = new ChatPageVM()


function ChatFooter() {
    const currentChattingUser = useSelector((state: RootState) => state.chatWithDoctor.currentChattingUser)
    const dispatch = useDispatch()

    const [inputContent, setinputContent] = useState("second")
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setinputContent(e.currentTarget.value)
    }

    function updateStateForNewMessage(content : string) {
        if(currentChattingUser){
            const msg: Message = {
                user: currentChattingUser,
                content,
                createdAt: new Date().toDateString()
            }
            dispatch(addNewMessage(msg))
        }
    }

    const handleClick = () => {
        chatPageVM.saveMessage(inputContent)
        updateStateForNewMessage(inputContent)
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
