var table= document.getElementById("table");
var array = [{name: "John", age: 20, email: "123@gmail.com"}, {name: "Mary", age: 30,email: "123@gmail.com"}, {name: "Peter", age: 40,email: "123@gmail.com"}];


for(var i=0; i < array.length; i++){
    var html= "<tr><td>"+array[i].name+"</td><td>"+array[i].age+"</td><td>"+array[i].email+"</td></tr>";
    table.innerHTML += html;
    console.log(html);
    
}


var username= document.getElementById("username");
// var userpara= document.getElementById("userpara");


function about_page()
{
    console.log(username.value);
    window.location.assign("./about.html");
    localStorage.setItem("username", username.value);
    
}
// localStorage.setItem("username", "abdullah");


function aboutLoad()
{
    var userpara= document.getElementById("userpara");
    userpara.innerHTML= localStorage.getItem("username");
}