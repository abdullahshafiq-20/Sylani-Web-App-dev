window.addEventListener("DOMContentLoaded", function () {
    var uid=localStorage.getItem("uid");
    if(!uid)
    {
        window.location.href="index.html";
    }
    console.log(uid,"uid");
});