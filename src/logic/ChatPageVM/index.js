class ChatPageVM{
    constructor(){
    }

    getContacts(){
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

        const promise1 = new Promise((resolve, reject) => {
            setTimeout(() => {
              resolve(data);
            }, 300);
          });


        return promise1
    }

    getContactMessages(contactId){
        const messageData = [
            {
                userId : 1,
                content : "Bonjour",
                createdAt : "8h01 AM",
            },
            {
                userId : 2,
                content : "ça va ?",
                createdAt : "8h01 AM",
            },
            {
                userId : 2,
                content : "Regarde ces photos",
                attachments : 1,
                createdAt : "8h01 AM",
            },
        ]
        
        return messageData;
    }
}

export default ChatPageVM