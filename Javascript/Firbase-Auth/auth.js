// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBmEcMc_jHCDGqlqs6qZ8xC14A9UNrlmoY",
    authDomain: "my-first-project-1-c98da.firebaseapp.com",
    projectId: "my-first-project-1-c98da",
    storageBucket: "my-first-project-1-c98da.appspot.com",
    messagingSenderId: "1012241146158",
    appId: "1:1012241146158:web:a5bc95e7379c334635dabf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
console.log(app);
const auth = getAuth(app);
console.log(auth);


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
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
        });
}
window.login = login;


