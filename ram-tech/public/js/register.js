window.onload = function () {
    const form = document.querySelector('#form');
    form.name.focus();

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
        } else {
            form.name.classList.remove('is-invalid');
            form.name.classList.add('is-valid');
        }
        if (!form.lastName.value) {
            errors.push({ lastName: 'lastName', message: 'El campo apellido no puede estar vacio' });
            form.lastName.classList.add('is-invalid');
        } else {
            form.lastName.classList.remove('is-invalid');
            form.lastName.classList.add('is-valid');
        }

        let reEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

        if (!reEmail.test(form.email.value)) {
            errors.push({ name: 'email', message: 'El campo email es inválido' });
            form.email.classList.add('is-invalid');
        } else {
            form.email.classList.add('is-valid');
            form.email.classList.remove('is-invalid');
        }
        if (form.password.value > 8) {
            errors.push({ name: 'password', message: 'El campo contraseña debe tener como mínimo 8 caracteres' });
            form.password.classList.add('is-invalid');
        } else {
            form.password.classList.remove('is-invalid');
            form.password.classList.add('is-valid');
        }

        errors.forEach(error => {
            const errorLabel = document.getElementById(`error-${error.name}`);
            errorLabel.classList.add('show-error-message');
            errorLabel.innerText = error.message;
        });
        if (errors.length === 0) {
            form.submit();
        }
    });

    //-------------------DE REGISTRO DE PELÍCULAS------------------//    




}