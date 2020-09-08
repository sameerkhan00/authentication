let signup = () =>{
    let email=document.getElementById("mail");
    let password=document.getElementById("password")
    firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
   .then((result)=>{console.log(result)})
    .catch(function(error) {
       
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
        console.log(error)
      });
}

let login =()=>{
    let mail=document.getElementById("login-mail")
    let password=document.getElementById("login-password")
    firebase.auth().signInWithEmailAndPassword(mail.value, password.value)
    .then(function(result){
    console.log(result)
    })
    .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
      console.log(error)
      });
}