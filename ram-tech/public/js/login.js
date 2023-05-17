window.onload = function () {
    const form = document.querySelector('#form');
    const reEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    const eyeIcon = document.getElementById("eye")

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const allErrorLabels = document.querySelectorAll('.show-error-message');
        allErrorLabels.forEach(element => {
            element.classList.remove('show-error-message');
            element.innerHTML = '';
        });
        const errors = [];

        if (!reEmail.test(form.email.value)) {
            errors.push({ name: 'email', message: 'El campo email es inválido' });
            form.email.classList.add('is-invalid');
        } else {
            form.email.classList.add('is-valid');
            form.email.classList.remove('is-invalid');
        }
        if (!form.password.value) {
            errors.push({ name: 'password', message: 'El campo contraseña no puede estar vacío' });
            form.password.classList.add('is-invalid');
        }
        else {
            form.password.classList.remove('is-invalid');
            form.password.classList.add('is-valid');
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

    let isTextVisible = false;
    eyeIcon.addEventListener("click", () => {
        if (isTextVisible) {
            form.password.type = "password";
            eyeIcon.classList.remove("fa-solid", "fa-eye-slash");
            eyeIcon.classList.add("fa-solid", "fa-eye");
        } else {
            form.password.type = "text";
            eyeIcon.classList.remove("fa-solid", "fa-eye");
            eyeIcon.classList.add("fa-solid", "fa-eye-slash");
        }

        isTextVisible = !isTextVisible;
    });
}