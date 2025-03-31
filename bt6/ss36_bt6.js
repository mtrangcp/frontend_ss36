
const stars = document.querySelectorAll(".stars");

stars.forEach((star, index) => {
    star.addEventListener("mouseover", function (e) {
        star.classList.toggle("active");



        console.log(document.querySelector(`.stars[data-value="${index + 1}"]`));



    });
});


