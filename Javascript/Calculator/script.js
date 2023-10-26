function input( value)
{
    document.getElementById("input").value += value;
}
function allclear()
{
    document.getElementById("input").value = "";
}
 
function calculate() {
    var result = document.getElementById("input").value;
    var LastResult = eval(result);
    document.getElementById("input").value = LastResult;
}
function clearback() {
    var rmeoveLast = document.getElementById("input").value;
    document.getElementById("input").value = rmeoveLast.slice(0, -1);
}