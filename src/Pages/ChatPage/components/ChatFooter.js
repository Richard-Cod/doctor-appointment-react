
function ChatFooter() {
    return (
        <div className="chat-footer">
            <div className="input-group">
            <div className="input-group-prepend">
                <div className="btn-file btn">
                <i className="fa fa-paperclip" />
                <input type="file" />
                </div>
            </div>
            <input type="text" className="input-msg-send form-control" placeholder="Type something" />
            <div className="input-group-append">
                <button type="button" className="btn msg-send-btn"><i className="fab fa-telegram-plane" /></button>
            </div>
            </div>
        </div>
    )
}

export default ChatFooter
