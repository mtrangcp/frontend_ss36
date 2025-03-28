let arrTasks = JSON.parse(localStorage.getItem("arrTasks")) || [];

let inputText = document.querySelector("#taskName");
let btnAdd = document.querySelector("#btnAdd");

let pendingTasks = document.querySelector("#pendingTasks");
let inProgressTasks = document.querySelector("#inProgressTasks");
let doneTasks = document.querySelector("#doneTasks");

let arrTask0 = arrTasks.filter((item) => item.status === 0);
let arrTask1 = arrTasks.filter((item) => item.status === 1);
let arrTask2 = arrTasks.filter((item) => item.status === 2);

const renderTask = (divList, arr) => {
    divList.innerHTML = "";

    divList.innerHTML = arr.map((item) => {
        return `
            <div class="task">
                <p>${item.name}</p>
                <button onclick="changeStatus('${item.name}')" class= "${item.status === 2 ? "hideBtn" : ""}">Chuyển tiếp</button>
            </div>
        `;
    }).join("");
}

renderTask(pendingTasks, arrTask0);
renderTask(inProgressTasks, arrTask1);
renderTask(doneTasks, arrTask2);

btnAdd.addEventListener("click", function () {
    if (inputText.value.trim()) {
        let objTask = {
            name: inputText.value.trim(),
            status: 0
        }

        arrTasks.push(objTask);
        localStorage.setItem("arrTasks", JSON.stringify(arrTasks));

        window.location.reload();
    } else {
        alert("Dữ liệu trống");
    }
})

function changeStatus(name) {
    let index = arrTasks.findIndex((item) => item.name === name);
    arrTasks[index].status++;
    localStorage.setItem("arrTasks", JSON.stringify(arrTasks));

    window.location.reload();
}

