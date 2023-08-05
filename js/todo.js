const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";
const maxListLength = 4;

let toDos = [];
if (localStorage.getItem(TODOS_KEY) === null) {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function maxtodoListLength() {
  const todoLength = JSON.parse(localStorage.getItem(TODOS_KEY)).length;
  if (todoLength >= maxListLength) {
    toDoInput.classList.add("hidden");
  } else {
    toDoInput.classList.remove("hidden");
  }
}

// array 자체를 문자열로 만들어 locla storage에 저장! (array 형태로 저장하기 위함)
function saveToDos() {
  localStorage.setItem("todos", JSON.stringify(toDos));
}

function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveToDos();
  maxtodoListLength();
}

function paintToDo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  span.innerText = newTodo.text;
  const btn = document.createElement("button");
  btn.innerText = "❌";
  btn.addEventListener("click", deleteToDo);
  toDoList.appendChild(li);
  li.appendChild(span);
  li.appendChild(btn);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveToDos();
  maxtodoListLength();
}

toDoForm.addEventListener("submit", handleToDoSubmit);
//

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
  maxtodoListLength();
}
