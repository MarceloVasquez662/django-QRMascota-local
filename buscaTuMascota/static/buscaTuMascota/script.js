//Validacion de calendario
function setearCalendario() {
    var hoy = new Date();
    var dia = hoy.getDate();
    var mes = hoy.getMonth() + 1;
    var anio = hoy.getFullYear();
    if (dia < 10) { dia = "0" + dia }
    if (mes < 10) { mes = "0" + mes }
    hoy = anio + "-" + mes + "-" + dia;
    document.getElementById("fecha").setAttribute('max', hoy)
    document.getElementById("fecha").setAttribute('min', "2000-01-01")
}

//Validacion formulario
function validacionFormulario() {
    let error = document.getElementById("error");
    let fecha = document.getElementById("fecha");
    let nota = document.getElementById("nota");

    if (nombre == null || fecha == null || especie == null || raza == null || color == null || rut == null || telefono == null || direccion == null || nota == null) {
        error.innerHTML = "Se borraron elementos, recargue el formulario";
        return false;
    }
    else {
        let validacion = validarRUT()
        if (validacion == false) { return false }

        validacion = validarNombre()
        if (validacion == false) { return false }

        validacion = validarEspecie()
        if (validacion == false) { return false }

        validacion = validarRaza(raza)
        if (validacion == false) { return false }

        validacion = validarColor()
        if (validacion == false) { return false }

        validacion = validarTelefono()
        if (validacion == false) { return false }

        validacion = validarDireccion()
        if (validacion == false) { return false }
    }
}

function validarRUT() {
    let rut = document.getElementById("rut");
    if (rut.value.trim() == "") {
        error.innerHTML = "Rut vacio";
        rut.setAttribute("class", "form-control is-invalid")
        return false;
    }
    else {
        if (rut.value.length < 9 || rut.value.length > 10) {
            error.innerHTML = "Rut debe tener 9 o 10 caracteres";
            rut.setAttribute("class", "form-control is-invalid")
            return false;
        }
        else {
            let rutContacto = rut.value;
            rutContacto = rutContacto.replace("-", "-");
            let regex = /^[0-9]+[-|‐]{1}[0-9kK]{1}$/;
            if (!regex.test(rutContacto)) {
                error.innerHTML = "Rut no esta en el formato correcto";
                rut.setAttribute("class", "form-control is-invalid")
                return false;
            }
            else {
                rut.setAttribute("class", "form-control is-valid")
            }
        }
    }
}

function validarNombre() {
    let nombre = document.getElementById("nombre");
    if (nombre.value.trim() == "") {
        error.innerHTML = "Nombre vacio"
        nombre.setAttribute("class", "form-control is-invalid")
        return false;
    }
    else {
        if (nombre.value.length > 50) {
            error.innerHTML = "Nombre supera maximo de 50 caracteres"
            nombre.setAttribute("class", "form-control is-invalid")
            return false;
        }
        else {
            nombre.setAttribute("class", "form-control is-valid")
        }
    }
}

function validarEspecie() {
    let especieAnimal = especie.value
    if (especieAnimal == "Perro" || especieAnimal == "Gato" || especieAnimal == "Conejo") {
        especie.setAttribute("class", "form-control is-valid")
    }
    else {
        error.innerHTML = "Especie modificada, recargue el formulario"
        especie.setAttribute("class", "form-control is-invalid")
        return false;
    }
}

function validarRaza() {
    let raza = document.getElementById("raza");
    if (raza.value.trim() == "") {
        error.innerHTML = "Raza vacio"
        raza.setAttribute("class", "form-control is-invalid")
        return false;
    }
    else {
        if (raza.value.length > 30) {
            error.innerHTML = "Raza supera maximo de 30 caracteres"
            raza.setAttribute("class", "form-control is-invalid")
            return false;
        }
        else {
            raza.setAttribute("class", "form-control is-valid")
        }
    }

}

function validarColor() {
    let color = document.getElementById("color");
    if (color.value.trim() == "") {
        error.innerHTML = "Color vacio"
        color.setAttribute("class", "form-control is-invalid")
        return false;
    }
    else {
        if (color.value.length > 30) {
            error.innerHTML = "Color supera maximo de 30 caracteres";
            color.setAttribute("class", "form-control is-invalid")
            return false;
        }
        else {
            color.setAttribute("class", "form-control is-valid")
        }
    }
}

function validarTelefono() {
    let telefono = document.getElementById("telefono");
    if (isNaN(telefono.value)) {
        error.innerHTML = "El telefono no es numerico";
        telefono.setAttribute("class", "form-control is-invalid")
        return false;
    }
    else {
        if (telefono.value < 0) {
            error.innerHTML = "El valor del telefono no puede ser 0 o menor";
            telefono.setAttribute("class", "form-control is-invalid");
            return false;
        }
        else {
            if (telefono.value.toString().length != 8) {
                error.innerHTML = "El telefono no tiene 8 caracteres";
                telefono.setAttribute("class", "form-control is-invalid")
                return false;
            }
            else {
                nombre.setAttribute("class", "form-control is-valid")
            }
        }
    }
}

function validarDireccion() {
    let direccion = document.getElementById("direccion");
    if (direccion.value.trim() == "") {
        error.innerHTML = "Direccion vacio";
        direccion.setAttribute("class", "form-control is-invalid")
        return false;
    }
    else {
        if (direccion.value.length > 30) {
            error.innerHTML = "Direccion supera maximo de 50 caracteres";
            direccion.setAttribute("class", "form-control is-invalid")
            return false;
        }
        else {
            direccion.setAttribute("class", "form-control is-valid")
        }
    }

    if (nota.value.length > 100) {
        error.innerHTML = "Nota supera maximo de 100 caracteres";
        nota.setAttribute("class", "form-control is-invalid")
        return false;
    }
    else {
        nota.setAttribute("class", "form-control is-valid")
    }
}

function imprimirQR() {
    let contenido = document.getElementById("imagenQR").innerHTML;
    let contenidoOriginal = document.body.innerHTML;
    document.body.innerHTML = contenido;
    window.print();
    document.body.innerHTML = contenidoOriginal;
}
