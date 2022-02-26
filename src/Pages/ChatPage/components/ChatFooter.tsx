import { useEffect, useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { toast } from "react-toastify"
import { RootState } from "../../../app/store"
import { Message } from "../../../logic/models/Message"
import { User } from "../../../logic/models/User"
import SocketManager from "../../../logic/sockets"
import ChatPageVM from "../../../logic/viewModels/ChatPageVM"
import { addNewMessage } from "../../../redux/chatWithDoctor/chatWithDoctor"

const chatPageVM = new ChatPageVM()


function ChatFooter() {
    const user = useSelector((state: RootState) => state.user.value)
    const currentChattingUser = useSelector((state: RootState) => state.chatWithDoctor.currentChattingUser)
    const dispatch = useDispatch()

    const manager = useRef(new SocketManager())

    useEffect(() => {
        manager.current.connect()
    }, [])

    useEffect(() => {
        if(user) manager.current.addUser(user.id)
    }, [])

    useEffect(() => {
        manager.current.socket.on("getMessage" , (payloadFromSocket : any) => {
            const {message} = payloadFromSocket
            console.log(message);
            
            toast("vous avez recu un putain de message")
            if(currentChattingUser && user){
                console.log(message);
                console.log("ayaia xaui");
                dispatch(addNewMessage(message))
            }
            
        })
    }, [])
    

    const [inputContent, setinputContent] = useState("second")
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setinputContent(e.currentTarget.value)
    }

    function updateStateForNewMessage(message : Message) {
            dispatch(addNewMessage(message))
    }

    function sendMessageToSocket(message : Message , user:User) {
        if(currentChattingUser)
        manager.current.sendMessage(message , user,currentChattingUser)
        // dispatch(addNewMessage(message))
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
            sendMessageToSocket(msg , user)

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
