import React from "react"
import { useAppDispatch } from "../../../app/hooks";
import { Contact } from "../../../logic/models/Contact";
import ChatPageVM from "../../../logic/viewModels/ChatPageVM/ChatWithDoctorPageVM";
import {  setContactsFiltered } from "../../../redux/chatWithDoctor/chatWithDoctor";

const chatPageVM = new ChatPageVM()

function SearchChatForm({contactList} : {contactList : Contact[] | undefined}) {
    const dispatch = useAppDispatch()
    
    const [query, setquery] = React.useState("")
    const handleChange = (e : React.FormEvent<HTMLInputElement>) => {
        const q = e.currentTarget.value
        setquery(q)
        if (contactList) {
            const data = chatPageVM.filterContactsByName(q ,contactList)
            console.log(data);
            dispatch(setContactsFiltered(data))
        }
    }
    
    return (
        <form className="chat-search">
            <div className="input-group">
            <div className="input-group-prepend">
                <i className="fas fa-search" />
            </div>
            <input type="text" value={query} onChange={handleChange} className="form-control" placeholder="Search" />
            </div>
        </form>
    )
}

export default SearchChatForm
