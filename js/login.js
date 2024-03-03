document.getElementById('btnLogin').addEventListener('click', validar);

function validar() {
    let user = document.getElementById('username').value;
    let pass = document.getElementById('password').value;

    const userName = "user";
    const passCode = "12345";

    if (user == "" || pass == "") {
        alert("Los campos son requeridos");
    } else {
        if (userName === user && passCode === pass) {
            window.location.href = "home.html";
        } else {
            alert('El usuarui o contraseña son incorrectos')
        }
    }
}