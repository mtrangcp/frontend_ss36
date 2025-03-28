let mode = localStorage.getItem("mode") || "true";

let iconMode = document.querySelector("#mode-icon");
let textH1 = document.getElementsByTagName("h1");
let textH2 = document.getElementsByTagName("h2");
let btnBuy = document.querySelectorAll(".buy-btn");
let navbar = document.querySelector(".navbar");
let productInfo = document.querySelectorAll(".product-info");

if (mode === "false") {
    darkMode();
}

iconMode.addEventListener("click", function () {
    mode = mode === "true" ? "false" : "true";
    darkMode();

    localStorage.setItem("mode", mode);
});

function darkMode() {
    document.body.classList.toggle("colorBlack");
    for (let h1 of textH1) {
        h1.classList.toggle("colorText");
    }

    for (let h2 of textH2) {
        h2.classList.toggle("colorText");
    }

    for (let btn of btnBuy) {
        btn.classList.toggle("colorBtn");
    }

    for (let el of productInfo) {
        el.classList.toggle("colorBg");
    }

    navbar.classList.toggle("colorBg");
}
