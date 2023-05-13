window.onload = function () {
    const form = document.querySelector('#form');

    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+[\]{};':"\\|,.<>/?]).{8,}$/;
    const allowedExtensions = /(\.png|\.jpeg|\.jpg|\.gif)$/i;
    const reEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const allErrorLabels = document.querySelectorAll('.show-error-message');
        allErrorLabels.forEach(element => {
            element.classList.remove('show-error-message');
            element.innerHTML = '';
        });
        const errors = [];
        if (!form.name.value) {
            errors.push({ name: 'name', message: 'El campo nombre no puede estar vacio' });
            form.name.classList.add('is-invalid');
        } else if (form.name.value.length < 2) {
            errors.push({ name: 'name', message: 'El campo nombre debe tener como mínimo 2 caracteres' });
            form.name.classList.add('is-invalid');
        }
        else {
            form.name.classList.remove('is-invalid');
            form.name.classList.add('is-valid');
        }

        if (!form.lastName.value) {
            errors.push({ name: 'lastName', message: 'El campo apellido no puede estar vacio' });
            form.lastName.classList.add('is-invalid');
        } else if (form.lastName.value.length < 2) {
            errors.push({ name: 'lastName', message: 'El campo apellido debe tener como mínimo 2 caracteres' });
            form.lastName.classList.add('is-invalid');
        }
        else {
            form.lastName.classList.remove('is-invalid');
            form.lastName.classList.add('is-valid');
        }

        if (!form.image.value) {
            errors.push({ name: 'image', message: 'Debe seleccionar una imagen' });
            form.image.classList.add('is-invalid');
        }
        else if (!allowedExtensions.exec(form.image.value)) {
            errors.push({ name: 'image', message: 'El archivo seleccionado no es una imagen válida' });
            form.image.classList.add('is-invalid');
        }
        else {
            form.image.classList.remove('is-invalid');
            form.image.classList.add('is-valid');
        }

        if (!reEmail.test(form.email.value)) {
            errors.push({ name: 'email', message: 'El campo email es inválido' });
            form.email.classList.add('is-invalid');
        } else {
            form.email.classList.add('is-valid');
            form.email.classList.remove('is-invalid');
        }
        if (!form.password.value || form.password.value.length < 8 || !passwordRegex.test(form.password.value)) {
            errors.push({ name: 'password', message: 'El campo contraseña debe tener como mínimo 8 caracteres y contener al menos una mayúscula, una minúscula, un carácter especial y un número' });
            form.password.classList.add('is-invalid');
        }
        else {
            form.password.classList.remove('is-invalid');
            form.password.classList.add('is-valid');
        }
        if (!form.confirmPassword.value || form.password.value !== form.confirmPassword.value) {
            errors.push({ name: 'confirmPassword', message: 'Las contraserñas no coinciden' });
            form.confirmPassword.classList.add('is-invalid');
        }
        else {
            form.confirmPassword.classList.remove('is-invalid');
            form.confirmPassword.classList.add('is-valid');
        }

        errors.forEach(error => {
            const errorLabel = document.getElementById(`error-${error.name}`);
            console.log(errorLabel);
            errorLabel.classList.add('show-error-message');
            errorLabel.innerText = error.message;
        });

        if (errors.length === 0) {
            form.submit();
        }
    });
}