let inputbox = document.getElementById('input-box');
let display = document.getElementById('display');

// adding on keypress event listner
inputbox.addEventListener('keypress', function(e) {
    display.innerText = "Pressed successfully" + e.key
});