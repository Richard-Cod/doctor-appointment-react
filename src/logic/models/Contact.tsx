import { Message } from "./Message";
import { User } from "./User";

interface Contact{
    user: User,
    lastMessage : Message,
}

export type {Contact}