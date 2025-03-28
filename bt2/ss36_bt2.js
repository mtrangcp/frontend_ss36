let arrDish = JSON.parse(localStorage.getItem("listDish")) || [
    {
        name: "Bún bò Huế",
        img: "https://cdn.tcdulichtphcm.vn/upload/2-2023/images/2023-06-19/1687132881-1665749925-4.jpeg",
        like: 0
    },
    {
        name: "Phở bò Hà Nội",
        img: "https://hidafoods.vn/wp-content/uploads/2023/10/cach-nau-pho-bo-bap-hoa-thom-ngon-dam-da-huong-vi-4.jpg",
        like: 0
    },
    {
        name: "Cơm tấm Sài Gòn",
        img: "https://file.hstatic.net/1000394081/article/com-tam_e03b4325c9914def9d66619930a73432.jpg",
        like: 0
    },
]

let listDishes = document.querySelector("#listDishes");
let btnLike = document.querySelector("#btnLike");

const renderData = () => {
    listDishes.innerHTML = "";

    listDishes.innerHTML = arrDish.map((el, index) => {
        return `
            <div class="item">
                <img
                src="${el.img}"
                alt="img"
                />

                <div class="info">
                <h3>${el.name}</h3>
                <p><span style="color: red">❤</span> <span>${el.like}</span> lượt thích</p>
                <button id="btnLike"  onclick="clickBtnLike(${index})">Thích +1</button>
                </div>
            </div>
        `;
    }).join("");
}
renderData();

function clickBtnLike(index) {
    arrDish[index].like++;
    renderData();

    localStorage.setItem("listDish", JSON.stringify(arrDish));
}


