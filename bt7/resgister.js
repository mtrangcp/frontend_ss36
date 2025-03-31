let inputName = document.querySelector("#userName");
let inputPass = document.querySelector("#pass");
let btnResgister = document.querySelector("#btnResgister");

let errorPass = document.querySelector("#errorPass");
let errorName = document.querySelector("#errorName");
let form = document.querySelector("#form");

let account = JSON.parse(localStorage.getItem("account")) || {};

inputName.addEventListener("input", function () {
    inputName.value.trim() ? errorName.style.display = "none" : errorName.style.display = "block";
});

inputPass.addEventListener("input", function () {
    inputPass.value.trim() ? errorPass.style.display = "none" : errorPass.style.display = "block";
});

btnResgister.addEventListener("click", function (e) {
    e.preventDefault();

    if (inputName.value.trim()) {
        errorName.style.display = "none";

        if (inputPass.value.trim()) {
            errorPass.style.display = "none";

            if (account && account.userName && inputName.value.trim() === account.userName) {
                alert("Tên đã tồn tại");
                return;
            }

            account = {
                userName: inputName.value.trim(),
                pass: inputPass.value.trim(),
            }

            localStorage.setItem("account", JSON.stringify(account));
            console.log("Đăng ký thành công!");
            window.location.href = 'login.html';

        } else {
            errorPass.style.display = "block";
        }
    } else {
        errorName.style.display = "block";
    }
})
