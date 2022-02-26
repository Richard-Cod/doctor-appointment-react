import { io } from "socket.io-client";
import { Message } from "../models/Message";
import { User } from "../models/User";
// import EVENTS from "../../socket/constants/events"


class SocketManager{
    private socketUrl = "http://127.0.0.1:3001/"
    // private socket =  io(this.socketUrl)
    socket : any
    constructor(){
        this.socket = io(this.socketUrl)
        this.socket.on("messageHasBeenSent" , (text:string) => {
            alert(text)
        })
    }

    connect(){
        return io(this.socketUrl)
    }

    addUser(userId:number){
        this.socket.emit("addUser" ,userId)
    }


    sendMessage(message : Message , sender : User , receiver : User){
        console.log("envoie");
        
        this.socket.emit("sendMessage" ,{ senderId : sender.id,
             receiverId: receiver.id,
              message
            })
    }
}


export default SocketManager