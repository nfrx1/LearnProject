let closed = true;

let started = document.getElementById("started")
let close = document.getElementById("close")
let container = document.getElementById("container")
let login = document.getElementById("login")
let email = document.getElementById("email")
let password = document.getElementById("password")
let loginButton = document.getElementById("login-button")
let problem = document.getElementById("problem")

started.onclick = () => {
    if (localStorage.getItem("account")){
        window.location.href = "main/main.html"
        return;
    }
    container.style.filter = "blur(7px)"
    login.style.display = "block";
}

close.onclick = () => {
    login.style.display = "none"
    container.style.filter = "blur(0)"
}
loginButton.onclick = () => {
    if (!email.checkValidity() || email.value.length < 8){
        problem.innerText = "Please Enter a valid email"
        return;
    }
    else if (password.value.length < 8){
        problem.innerText = "The password length less than 8 characters"
        return;
    }
    problem.innerText = ""
    localStorage.setItem("account", {
        email: email.value,
        password: password.value
    })
    window.location.href = "main/main.html"
}