

function display1()
{
    const n= document.querySelector("#names").value;
    const e= document.querySelector("#email").value;
    const d= document.querySelector("#display");
    d.innerHTML = "Name: " + n + "<br>" + "Email: " + e;
}

function clears()
{
    const n= document.querySelector("#names");
    const e= document.querySelector("#email");
    const d= document.querySelector("#display");
    n.value="";
    e.value="";
    d.innerHTML = "";
}