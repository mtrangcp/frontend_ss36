let selectedRating = document.querySelector("#selected-rating");
const stars = document.querySelectorAll(".stars");
const formEl = document.querySelector("#formEl");
const cmtEl = document.querySelector("#comment-input");

let starInput = 0;
let cmtLocals = JSON.parse(localStorage.getItem("cmts")) || [];
let listCmt = document.querySelector("#comment-list");
const renderData = () => {
    listCmt.innerHTML = "";

    listCmt.innerHTML = cmtLocals.map(item => {
        return `
            <li>
                <div>${"★".repeat(item.star)}</div>
                <p>${item.content}</p>
            </li>
        `;
    }).join("");
}
renderData();

stars.forEach((star, index) => {
    star.addEventListener("mouseover", function (e) {
        star.classList.add("active");

        // console.log(e.target.getAttribute("data"));

        starValue = e.target.getAttribute("data");

        for (let i = 0; i < starValue; i++) {
            stars[i].classList.add("active");
        }

        for (let i = starValue; i < stars.length; i++) {
            stars[i].classList.remove("active");
        }

        starInput = starValue;
        selectedRating.textContent = `Bạn đã đánh giá ${starInput} sao`;
    });
});

formEl.addEventListener("submit", function (event) {
    event.preventDefault();

    let newObj = {
        id: Math.ceil(Math.random() * 100000),
        content: cmtEl.value.trim(),
        star: +starInput
    }

    cmtLocals.push(newObj);
    localStorage.setItem("cmts", JSON.stringify(cmtLocals));

    cmtEl.value = "";

    for (let i = 0; i < stars.length; i++) {
        stars[i].classList.remove("active");
    }

    renderData();
});
