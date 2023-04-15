const nombre = document.querySelector('#nombre');
const apellido = document.querySelector('#apellido');
const ciudad = document.querySelector('#ciudad');
const provincia = document.querySelector('#provincia');
const email = document.querySelector('#email');
const telefono = document.querySelector('#telefono');

const validateEmptyField = (e)=> {
        const field = e.target;
        const fieldValue = e.target.value;
        if (fieldValue.length === 0){
            field.classList.add("invalid");
            field.nextElementSibling.classList.add("error");
            field.nextElementSibling.innerText = `Debe ingresar ${field.id}`;
        }else{
            field.classList.remove("invalid");
            field.nextElementSibling.classList.remove("error");
            field.nextElementSibling.innerText = "";
        }
    }

    nombre.addEventListener("blur", validateEmptyField);
    apellido.addEventListener("blur", validateEmptyField);
    ciudad.addEventListener("blur", validateEmptyField);
    provincia.addEventListener("blur", validateEmptyField);
    email.addEventListener("blur", validateEmptyField);
    telefono.addEventListener("blur", validateEmptyField);