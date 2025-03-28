let nameLocal = localStorage.getItem("ss36bt1") || "";

let modalSave = document.querySelector(".saveName");
let modalHelo = document.querySelector(".heloName");

let btnSave = document.querySelector("#btnSave");
let inputName = document.querySelector("#nameInput");

let btnChangeName = document.querySelector("#changeName");

if (nameLocal) {
    modalSave.style.display = "none";

    modalHelo.querySelector("h2").innerText = `Chào bạn, ${nameLocal}`;
} else {
    modalHelo.style.display = "none";
}

btnChangeName.addEventListener("click", function () {
    modalSave.style.display = "block";
    modalHelo.style.display = "none";
});

btnSave.addEventListener("click", function (event) {
    event.preventDefault();
    if (inputName.value.trim()) {
        nameLocal = inputName.value.trim();

        localStorage.setItem("ss36bt1", nameLocal);
        window.location.reload();
    } else {
        alert("Tên rỗng");
    }
})

