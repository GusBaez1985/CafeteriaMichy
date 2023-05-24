
const $form = document.querySelector("#form");
var formularioValidado = false

$form.addEventListener("submit", envioFormulario);


async function envioFormulario(event) {
    // //evito que recargue la pagina
    event.preventDefault()
    validar()
    if (formularioValidado){
        const form = new FormData(this)
        const response = await fetch("https://formspree.io/f/xeqwdzbw", {
            method: this.method,
            body: form,
            headers: {
                'Accept': 'application/json'
            }
        })
        if (response.ok) {
            $form.reset();
            alert("Gracias por contactarnos, en breve nos estaremos comunicando")
            //lo que quiero es que se me actualice la pagina
            location.href = location.href
        } 
    }else{
        //lo que quiero es que se me actualice la pagina
        location.href = location.href
    }
}

function validar() {
    let validaNombre = document.getElementById("fullname").value;
    if(validaNombre == ""){
        alert("El campo Nombre esta vacio, favor de completar");
        var nombreValidado = false;
    }else{
        nombreValidado = true
    }



    let validaMail = document.getElementById("email").value;
    if(validaMail == ""){
        alert("El campo mail esta vacio, favor de completar")
        var mailValidado = false;
    }else{
        mailValidado  = true
    }


    let validaMensaje = document.getElementById("mensaje").value;
    if(validaMensaje == ""){
        alert("El campo Mensaje esta vacio, favor de completar")
        var mensajeValidado = false
    }else{
        mensajeValidado = true;
    }

    if(nombreValidado && mailValidado && mensajeValidado){
        formularioValidado = true
        
    }

}