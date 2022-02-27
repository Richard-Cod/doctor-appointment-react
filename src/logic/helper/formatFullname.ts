import { User } from "../models";

const formatFullname =  (user : User) => {
    return `${user.first_name} ${user.last_name}`;
}

export {formatFullname}