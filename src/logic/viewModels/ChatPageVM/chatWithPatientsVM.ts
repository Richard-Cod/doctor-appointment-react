import ChatPageVM from "./ChatPageVM";

class ChatWithPatientsVM extends ChatPageVM {
    async getDoctorContacts(){
        const data = await this.dependencyContainer.chatRepository.getDoctorContacts()
        return data
     }
}

export default ChatWithPatientsVM