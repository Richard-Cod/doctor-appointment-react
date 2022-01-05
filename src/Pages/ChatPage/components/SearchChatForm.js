import React from "react"

function SearchChatForm() {
    const [query, setquery] = React.useState("")
    return (
        <form className="chat-search">
            <div className="input-group">
            <div className="input-group-prepend">
                <i className="fas fa-search" />
            </div>
            <input type="text" value={query} onChange={(e) => setquery(e.target.value)} className="form-control" placeholder="Search" />
            </div>
        </form>
    )
}

export default SearchChatForm
