const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const todoForm = document.getElementById("todo-form");

const HIDDEN_CLASSNAME = "hidden";
const FLEX_CLASSNAME = "flex";
const USERNAME_KEY = "username";

function loginSubmit(event) {
  event.preventDefault();
  todoForm.classList.remove(HIDDEN_CLASSNAME);
  todoForm.classList.add(FLEX_CLASSNAME);
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
}

function paintGreetings(username) {
  greeting.innerText = `Have a nice day, ${username}.`;
  loginForm.classList.remove(FLEX_CLASSNAME);
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", loginSubmit);
  todoForm.classList.add(HIDDEN_CLASSNAME);
} else {
  paintGreetings(savedUsername);
  todoForm.classList.add(FLEX_CLASSNAME);
}

function removePlaceHolder() {
  loginInput.placeholder = "";
}

function addPlaceHolder() {
  loginInput.placeholder = "What is your name?";
}

loginInput.addEventListener("focus", removePlaceHolder);
loginInput.addEventListener("blur", addPlaceHolder);
