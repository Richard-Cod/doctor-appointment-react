class InMemoryAuthenticator{
    constructor(){

    }

    login(email , password){
        alert(JSON.stringify({email , password}))
    }

    loginWithGoogle(){
      alert("loginWithGoogle")
    }

    loginWithFacebook(){
        alert("loginWithFacebook")
      }

    register(email , password){
      alert('register')
    }
    registerWithGoogle(){
      alert("registerWithGoogle")
    }

    registerWithFacebook(){
        alert("registerWithFacebook")
      }

}

export default InMemoryAuthenticator