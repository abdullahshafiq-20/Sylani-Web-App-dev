// object cannot convert in string
// array can be converted in to string
// but on local storage things always converted in to string
// json=javascript object notation

// var obj=
// {
//     "name":"sagar",   //////////->json
    
// } just key will be in string-> "name"


// var obj=
// {
//     name:"sagar",

// }

// var strobj=JSON.stringify(obj);
// localStorage.setItem("obj",strobj);
// JSON.parse(localStorage.getItem("obj"));// parse=get your data back in object form
// console.log(obj);


// function signup(event)
// {
//     event.preventDefault();
//     var email=document.getElementById("email");
//     var password=document.getElementById("password");
//     var name=document.getElementById("name");
//     var obj={
//         name:name.value,
//         email:email.value,
//         password:password.value,
        
//     }
//     localStorage.setItem("obj",JSON.stringify([obj]));
//     var objecttt=JSON.parse(localStorage.getItem("obj"));
    

//     if(objecttt[0]!=NULL)
//     {

//         //make the loacal storage to append array




//     }

    
// }
function signup() {
    var username = document.getElementById("name_sign")
    var email = document.getElementById("email_sign")
    var password = document.getElementById("password_sign")

    var userObj = {
        name: username.value,
        email: email.value,
        password: password.value
    }

    var getUsers = localStorage.getItem("users")

    if (getUsers === null) {
        localStorage.setItem("users", JSON.stringify([userObj]))
    }
    else {
        var userParse = JSON.parse(getUsers)
        console.log(userParse, "userParse")
        var email_check = userParse.find(function (value, index) {
            if (value.email === userObj.email) {
                return true
            }
        })
        //find will automatically store the array in value ans return index number in duplicate found 
        //

        if (email_check === undefined) {
            userParse.push(userObj)
            localStorage.setItem("users", JSON.stringify(userParse))
            alert("user registered");
            window.location.href = "#login"

        } else {
            alert("email address already exists!")
        }
    }



}

function login()
{
    var email=document.getElementById("email_login");
    var password=document.getElementById("password_login");
    if(!email.value || !password.value)
    {
        alert("please fill all the fields");
        return;
    }
    var userCol = JSON.parse(localStorage.getItem("users"));
    console.log(userCol);
    if (userCol === null) {
        alert("user not found pasrsse");
        return;
    }
    var userExizt = userCol.find(function(value) {
        if (value.email === email.value && value.password === password.value) {
            alert("user found");
            window.location.href = "home.html";
            return;
        }
    });
 
    console.log("yes", userExizt);
}
