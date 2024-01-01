import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    app,
    initializeApp,
    auth
} from "./firbase.js";

function signup(event) {
    event.preventDefault();
    console.log("signup");
    var email_signup = document.getElementById("email_sign");
    var name_sign = document.getElementById("name_sign");
    var password_signup = document.getElementById("password_sign");

    createUserWithEmailAndPassword(auth,email_signup.value, password_signup.value)
    .then(function (success) {
      console.log(success, "success");
    })
    .catch(function (error) {
      console.log(error, "error");
    });
}
window.signup = signup;

function login(event) {
    event.preventDefault();
    console.log("login");

    const email_login = document.getElementById("email_login");
    const password_login = document.getElementById("password_login");
    signInWithEmailAndPassword(auth, email_login.value, password_login.value)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(user);
            localStorage.setItem("uid", user.uid);  
            window.location.href = "dash.html";
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorCode, errorMessage);
        });
}
window.login = login;


//
window.addEventListener("DOMContentLoaded", function () {
    var uid=localStorage.getItem("uid");
    if(uid)
    {
        window.location.href="dash.html";
    }
    console.log(uid,"uid");
});

