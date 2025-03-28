let bgColor = localStorage.getItem("color") || "white";

let btnRed = document.querySelector(".btnRed");
let btnBlue = document.querySelector(".btnBlue");
let btnYellow = document.querySelector(".btnYellow");
let btnViolet = document.querySelector(".btnViolet");

if (bgColor !== "white") {
    document.body.style.backgroundColor = bgColor;
}

console.log("bgColor: ", bgColor);

btnRed.addEventListener("click", () => changeColor("red"));
btnBlue.addEventListener("click", () => changeColor("blue"));
btnYellow.addEventListener("click", () => changeColor("yellow"));
btnViolet.addEventListener("click", () => changeColor("violet"));

function changeColor(color) {
    document.body.style.backgroundColor = color;
    localStorage.setItem("color", color);
}

