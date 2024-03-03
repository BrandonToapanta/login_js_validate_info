const formulario = document.getElementById('formurario');
const inputs = document.querySelectorAll('#formurario input');

const expresiones = {
    usuario: /^[a-zA-Z0-9\_\-]{4,16}$/,
    nombre: /^[a-zA-ZÁ-ý\s]{1,40}$/,
    password: /^.{4,12}$/,
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    telefono: /^\d{7,14}$/
}

const validarFormulario = (e) => {
    switch (e.target.name) {
        case "usuario":
            if (expresiones.usuario.test(e.target.value)) {
                document.querySelector('#grupo_usuario .input-error').classList.remove('input-error-activo');
            } else {
                document.querySelector('#grupo_usuario .input-error').classList.add('input-error-activo');
            }
            break
        case "re-password":
            validarPasword2();
            break
    }
}

const validarPasword2 = () => {
    const pass1 = document.getElementById('password')
    const pass2 = document.getElementById('re-password')

    if (pass1.value !== pass2.value) {
        document.querySelector('#grupo_password2 .input-error').classList.add('input-error-activo');
    } else {
        document.querySelector('#grupo_password2 .input-error').classList.remove('input-error-activo');
    }
}

formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    let user = document.getElementById('usuario').value;
    let mail = document.getElementById('mail').value;
    let celular = document.getElementById('celular').value;
    let password1 = document.getElementById('password').value;
    let password2 = document.getElementById('re-password').value;

    if (user == '' || mail == '' || celular == '' || password1 == '' || password2 == '') {
        document.getElementById('alerteGeneral').style.display = 'block';
    } else {
        document.getElementById('alerteGeneral').style.display = 'none';
    }
})

// activar los eventos al presionar una tecla
inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
})