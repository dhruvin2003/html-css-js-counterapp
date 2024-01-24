const Decrementbutton = document.getElementById("Decrementbutton");
const Incrementbutton = document.getElementById("Incrementbutton");
const Resetbutton = document.getElementById("Resetbutton");
const Displayvalue = document.getElementById("Displayvalue");

Decrementbutton.addEventListener("click", () => {
    const value = Number(Displayvalue.innerText);
    if (value > 0) {
        Displayvalue.innerText = value - 1;

    } else {
        alert("Negative Value NOT Allowed")
    }
});

Incrementbutton.addEventListener("click", () => {
    const value = Number(Displayvalue.innerText);
    if (value >= 10) {
        alert("10+ Values Are NOT Allowed");



    } else {
        Displayvalue.innerText = value + 1;
    }
});

Resetbutton.addEventListener("click", () => {
    Displayvalue.innerText = 0;
});