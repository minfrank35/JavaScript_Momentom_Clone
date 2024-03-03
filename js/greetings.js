const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const loginResult = document.querySelector("#welcome")

const HIDDEN_CLASSSNAME = "hidden"
const USERNAME_KEY = "username"

function onLoginSubmit(info)  {
    info.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username)
}


function paintGreetings(username) {
    loginResult.innerText = `Hello ${username}`;
    loginResult.classList.remove(HIDDEN_CLASSSNAME);
}

loginForm.addEventListener("submit", onLoginSubmit)
const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSSNAME);
    loginForm.addEventListener("submit", onLoginSubmit)
} else {
    paintGreetings(savedUsername);
}
