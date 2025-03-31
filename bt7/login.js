let inputName = document.querySelector("#userName");
let inputPass = document.querySelector("#pass");
let chbStatus = document.querySelector("#chbRemember");
let btnLogin = document.querySelector("#btnLogin");

let errorPass = document.querySelector("#errorPass");
let errorName = document.querySelector("#errorName");

let account = JSON.parse(localStorage.getItem("account")) || {};

inputName.addEventListener("input", function () {
    inputName.value.trim() ? errorName.style.display = "none" : errorName.style.display = "block";
});

inputPass.addEventListener("input", function () {
    inputPass.value.trim() ? errorPass.style.display = "none" : errorPass.style.display = "block";
});

let form = document.querySelector("#form");
form.addEventListener("submit", function (e) {
    e.preventDefault();
})

btnLogin.addEventListener("click", function (e) {
    e.preventDefault();

    if (inputName.value.trim()) {
        errorName.style.display = "none";

        if (inputPass.value.trim()) {
            errorPass.style.display = "none";

            if (account) {
                if (account.userName === inputName.value.trim() && account.pass === inputPass.value.trim()) {
                    console.log(chbStatus.checked);

                    if (chbStatus.checked) {

                        let rememberMe = inputName.value.trim();
                        localStorage.setItem("rememberMe", rememberMe);
                    }
                    console.log("Đăng nhập thành công!");
                    // window.location.href = "index.html";

                } else {
                    alert("Đăng nhập thất bại!");
                }
            }
        } else {
            errorPass.style.display = "block";
        }
    } else {
        errorName.style.display = "block";
    }
})
