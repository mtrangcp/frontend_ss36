let account = JSON.parse(localStorage.getItem("account"));
let statusLogin = localStorage.getItem("rememberMe")

let nameLogin = document.querySelector("#userName");
let btnLogout = document.querySelector("#btnLogout");

if (statusLogin) {
    nameLogin.textContent = account.userName;

} else {
    window.location.href = "login.html";
}

btnLogout.addEventListener("click", function () {
    localStorage.removeItem("rememberMe");

    console.log("Đã đăng xuất!");

    window.location.href = "login.html";
});

