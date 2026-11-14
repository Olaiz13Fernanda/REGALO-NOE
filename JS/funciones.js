// =========================================
// ELEMENTOS PRINCIPALES
// =========================================

const contenedor = document.getElementById("contenedor");

const iniciar = document.getElementById("iniciar");

const botonXbox = document.getElementById("botonXbox");

const verCupon = document.getElementById("verCupon");


// =========================================
// ESCENA 1: INICIAR LA SORPRESA
// =========================================

let sorpresaIniciada = false;

iniciar.addEventListener("click", function () {

    if (sorpresaIniciada) return;

    sorpresaIniciada = true;

    iniciar.disabled = true;

    // Comienza la persecución
    contenedor.classList.add("persecucion-activa");

    // Después de la persecución aparece la carta
    setTimeout(function () {

        contenedor.classList.add("nota-activa");

    }, 4900);

});


// =========================================
// ESCENA 3: TRANSICIÓN XBOX
// =========================================

let xboxIniciado = false;

botonXbox.addEventListener("click", function () {

    if (xboxIniciado) return;

    xboxIniciado = true;

    botonXbox.disabled = true;

    // Inicia la animación del logo
    contenedor.classList.add("xbox-activado");

    // Después aparece la imagen de GTA VI
    setTimeout(function () {

        contenedor.classList.add("gta-activo");

    }, 1900);

});


// =========================================
// ESCENA 5: MOSTRAR EL CUPÓN
// =========================================

let cuponMostrado = false;

verCupon.addEventListener("click", function () {

    if (cuponMostrado) return;

    cuponMostrado = true;

    // Oculta GTA VI y muestra el cupón
    contenedor.classList.add("cupon-activo");

});


// =========================================
// FIN DE LA EXPERIENCIA
// =========================================

// El botón de WhatsApp es un enlace directo.
// Abre la conversación con el mensaje preparado.
// No envía el mensaje automáticamente.