const nombre = document.querySelector('#nombre');
const apellido = document.querySelector('#apellido');
const ciudad = document.querySelector('#ciudad');
const provincia = document.querySelector('#provincia');
const direccion = document.querySelector('#direccion');
const direccion2 = document.querySelector('#direccion2');
const email = document.querySelector('#email');
const codigoPostal = document.querySelector('#codigoPostal');

const validateEmptyField = (e)=> {
        const field = e.target;
        const fieldValue = e.target.value;
        if (fieldValue.length === 0){
            field.classList.add("invalid");
            field.nextElementSibling.classList.add("error");
            field.nextElementSibling.innerText = `${field.id} es requerido`;
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
    direccion.addEventListener("blur", validateEmptyField);
    email.addEventListener("blur", validateEmptyField);
    codigoPostal.addEventListener("blur", validateEmptyField);