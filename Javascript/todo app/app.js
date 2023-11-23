const input = document.getElementById('input');
const list_cont = document.getElementById('list-cont');

function addtask() {
    if (input.value=== '') {
        alert("Please enter a task");
    }
    else {
        let list = document.createElement('li');
        list.innerHTML = input.value;
        list_cont.appendChild(list);
        let span = document.createElement('span');
        span.innerHTML = "\u00D7";
        span.style.color = "white";
        list.appendChild(span);
    }
    input.value = "";
    savedata();

}
list_cont.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        savedata();
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        savedata();
    }
}, false);

function savedata() {
    localStorage.setItem("data", list_cont.innerHTML);
}
function showdata() {
    list_cont.innerHTML = localStorage.getItem("data");
}
showdata();
