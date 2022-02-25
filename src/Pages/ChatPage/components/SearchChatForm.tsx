import React from "react"
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../app/store";
import { Contact } from "../../../logic/models/Contact";
import ChatPageVM from "../../../logic/viewModels/ChatPageVM";
import { setContacts , setContactsFiltered } from "../../../redux/chatWithDoctor/chatWithDoctor";

const chatPageVM = new ChatPageVM()

function SearchChatForm({contactList} : {contactList : Contact[] | undefined}) {
    // const contactList = useSelector((state: RootState) => state.chatWithDoctor.contacts)
    const dispatch = useDispatch()
    
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
