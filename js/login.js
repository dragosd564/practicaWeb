let user = document.getElementById('username'); 
let pwd = document.getElementById('password');

window.addEventListener('DOMContentLoaded', () => {
    localStorage.removeItem('user');
})



function Auth() {
    if(user.value == "admin" && pwd.value == "admin1234") {
        window.location.href = "/web/index.html";
        localStorage.setItem('user', user.value);
        localStorage.setItem('rol','admin');
    }else if(user.value == "eduardo" && pwd.value == "1234"){
        window.location.href = "/web/index.html";
        localStorage.setItem('user', user.value);
        localStorage.setItem('rol','usuario');
    }
    else{
        alert("usuario o contraseña incorrectos");
        user.value = "";
        pwd.value = "";
    }
}