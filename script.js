//Variáveis botões 
var addBotao = document.getElementById("addBotao");
addBotao.addEventListener("click", addToDoItem);
function addToDoItem() {
    alert("$")
}

var completoBotao = document.getElementById("completoBotao");
completoBotao.addEventListener("click", clearCompletedToDoItens);
function clearCompletedToDoItens() {
    var completedItems = toDoList.getElementsByClassName("completed");

    while (completedItems.length > 0) {
        completedItems.item(0).remove();
    }
}

var vazioBotao = document.getElementById("limparBotao");
vazioBotao.addEventListener("click", emptyList);
function emptyList() {
    var toDoItems = toDoList.children;

    while (toDoItems.length > 0) {
        toDoItems.item(0).remove();
    }
}
var salvarBotao = document.getElementById("salvarBotao");
salvarBotao.addEventListener("click", saveList);
function saveList() {
    var toDos = [];

    for (var i = 0; i < toDoList.children.length; i++) {
        var toDo = toDoList.children.item(i);

        var toDoInfo = {
            "task": toDo.innerText,
            "completed": toDo.classList.contains("completed")
        };

        toDos.push(toDoInfo);

    }

    localStorage.setItem("toDos", JSON.stringify(toDos));
}

//Variáveis caixa de entrada
var toDoEntryBox = document.getElementById("caixaDeEntrada");
var toDoList = document.getElementById("todo-list");

//Função listar (enumerado)
function newToDoItem(itemText, completed) {
    var toDoItem = document.createElement("li");
    var toDoText = document.createTextNode(itemText);
    toDoItem.appendChild(toDoText);

    if (completed) {
        toDoItem.classList.add("completed");
    }

    toDoList.appendChild(toDoItem);
    toDoItem.addEventListener("dblclick", toggleToDoItemState);
}
function addToDoItem() {
    var itemText = toDoEntryBox.value;
    newToDoItem(itemText, false);
}

function toggleToDoItemState() {
    if (this.classList.contains("completed")) {
        this.classList.remove("completed");
    } else {
        this.classList.add("completed");
    }
}



var toDoInfo = {
    "task": "Thing I need to do",
    "completed": false
};

function loadList() {
    if (localStorage.getItem("toDos") != null) {
        var toDos = JSON.parse(localStorage.getItem("toDos"));

        for (var i = 0; i < toDos.length; i++) {
            var toDo = toDos[i];
            newToDoItem(toDo.task, toDo.completed);
        }
    }
}
loadList();

