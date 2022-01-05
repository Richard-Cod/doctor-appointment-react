
function SearchChatForm() {
    return (
        <form className="chat-search">
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <i className="fas fa-search" />
                    </div>
                    <input type="text" className="form-control" placeholder="Search" />
                  </div>
                </form>
    )
}

export default SearchChatForm
