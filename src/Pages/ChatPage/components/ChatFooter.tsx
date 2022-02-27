import { useEffect, useRef, useState } from "react"
import { toast } from "react-toastify"
import { useAppDispatch, useAppSelector } from "../../../app/hooks"
import { Message , User} from "../../../logic/models"
import SocketManager from "../../../logic/sockets"
import {ChatPageVM} from "../../../logic/viewModels"
import { addNewMessage, setWrittingUserId } from "../../../redux/chatWithDoctor/chatWithDoctor"

const chatPageVM = new ChatPageVM()

function ChatFooter() {
    const dispatch = useAppDispatch()
    const user = useAppSelector((s) => s.user.value)
    const currentChattingUser = useAppSelector((s) => s.chatWithDoctor.currentChattingUser)
    const manager = useRef(new SocketManager())
    const [inputContent, setinputContent] = useState("second")

    useEffect(() => {
        manager.current.connect()
        if(user) manager.current.addUser(user.id)
    }, [])

    useEffect(() => {
        manager.current.socket.on("getMessage" , (payloadFromSocket : any) => {
            const {message} = payloadFromSocket
            toast("vous avez recu un message")
            if(currentChattingUser && user){
                dispatch(addNewMessage(message))
            }
        })


        manager.current.socket.on("getUserIsTyping" , (payloadFromSocket : any) => {
            const {senderId} = payloadFromSocket
            if(user){
                dispatch(setWrittingUserId(senderId))
                setTimeout(()=> {
                    dispatch(setWrittingUserId(undefined))
                },2000)
            }


            // if(currentChattingUser && user){
            //     dispatch(addNewMessage(message))
            // }
        })

    }, [])


    
    
    
    function updateStateForNewMessage(message : Message) {
            dispatch(addNewMessage(message))
    }

    function sendMessageToSocket(message : Message , user:User) {
        if(currentChattingUser)
        manager.current.sendMessage(message , user,currentChattingUser)
    }
    function sendUserIsTypingToSocket() {
        if(currentChattingUser && user)
        manager.current.sendUserIsTyping(user, currentChattingUser)
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setinputContent(e.currentTarget.value)
        sendUserIsTypingToSocket()
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

