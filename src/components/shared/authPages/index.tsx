export function BottomPart({label , onClickGoogle , onClickFacebook} : {label : string , onClickGoogle : Function , onClickFacebook : Function}) {
    return (
        <div>
             <div className="login-or">
                <span className="or-line" />
                <span className="span-or">or</span>
                </div>
                <div className="row form-row social-login">
                <div className="col-6">
                    <button onClick={() => onClickFacebook()} className="btn btn-facebook btn-block"><i className="fab fa-facebook-f mr-1" /> {label}</button>
                </div>
                <div className="col-6">
                    <button onClick={() => onClickGoogle()} className="btn btn-google btn-block"><i className="fab fa-google mr-1" /> {label}</button>
                </div>
                </div>
            
        </div>
    )
}
