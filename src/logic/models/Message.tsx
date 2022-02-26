import { User } from "./User";

interface Message{
    receiver: User | undefined,
    sender: User,

    receiverID: number | undefined,
    senderID: number | undefined,

    content : string
    created_at : string,
    updated_at : string,
}

export type {Message}