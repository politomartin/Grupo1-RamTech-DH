window.onload = function () {
    const form = document.querySelector('#form');
    const allowedExtensions = /(\.png|\.jpeg|\.jpg|\.gif)$/i;
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
        } else if (form.name.value.length < 5) {
            errors.push({ name: 'name', message: 'El campo nombre debe tener como mínimo 5 caracteres' });
            form.name.classList.add('is-invalid');
        }
        else {
            form.name.classList.remove('is-invalid');
            form.name.classList.add('is-valid');
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

        if (form.description.value.length <= 20) {
            errors.push({ name: 'description', message: 'El campo descripción debe tener como mínimo 20 caracteres' });
            form.description.classList.add('is-invalid');
        }
        else {
            form.description.classList.remove('is-invalid');
            form.description.classList.add('is-valid');
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