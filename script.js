var addTask = document.getElementById("add-task");
var saveTask = document.getElementById("save-task");
var TaskDesc = document.getElementById("task-desc");
var listItems = document.querySelector(".list-items");

addTask.addEventListener('click', addTaskFunc);
saveTask.addEventListener('click', saveTaskFunc);

addEvent()

function addEvent() {
    var checkbox = document.querySelectorAll(".checkbox input");
    checkbox.forEach((element) => {
        element.addEventListener('change', completeTask);
    })
}





function completeTask(e) {
    var elem = e.target;

    var item = elem.closest(".item").children[1].children[0];

    if(elem.checked) {
        item.style.textDecoration = 'line-through';
    }else {
        item.style.textDecoration = 'none';
    }
}

localStorage.setItem("listTask", JSON.stringify(["task 1", "task2"]));

// localStorage.removeItem("cle")


    
// var listTasks = localStorage.getItem("listTask")

// console.log(listTasks)

// listTasks = JSON.parse(listTasks)

// listTasks.push("test3")
// console.log(listTasks)
// listTasks.pop("test3")

// console.log(listTasks)

// listTasks.forEach(element => {
//     console.log(element)
// })


function saveTaskFunc(event) {
    var content = TaskDesc.value;

    listItems.innerHTML = '<div class="item"><div class="checkbox"><input type="checkbox"></div><div class="content"><p class="description">' + content +'</p><p class="date">' + Date() + '</p></div><div class="buttons"><button><i class="fa fa-trash"></i></button><button style="background-color: #22d48d;"><i class="fa fa-pencil"></i></button></div></div>' + listItems.innerHTML ;

    addEvent()
    console.log(listItems.innerHTML)
}

function addTaskFunc(event) {
    var list = document.querySelectorAll(".add");

    // console.log(list)

    list.forEach(element => {
        element.classList.remove("d-none")
    });
}






//arrow functions 
// (element, elemant1) => {
        
// }

// function non (param) {
//     //traitement
// }