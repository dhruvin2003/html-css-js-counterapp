let container = document.getElementById("container");
let display = document.getElementById("display");
// adding keydown event listner
document.addEventListener("keydown", function(e) {
    display.style.color = "red";
    display.innerText = e.key + "keydown";
});
// adding keyup event listner
document.addEventListener("keyup", function(e) {
    display.style.color = "green";
    display.innerText = e.key + "keyup";
});