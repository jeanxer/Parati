/* ===========================================
   TIMER.JS
=========================================== */

document.addEventListener("DOMContentLoaded", () => {

    iniciarContador();

});

/* ===========================================
   CAMBIA ESTA FECHA
=========================================== */

// Año, Mes (0=Enero), Día, Hora, Minuto

const fechaInicio = new Date(

    2026,
    5,
    1,
    17,
    7,
    35

);

/* ===========================================
   CONTADOR
=========================================== */

function iniciarContador(){

    actualizarContador();

    setInterval(actualizarContador,1000);

}

function actualizarContador(){

    const ahora = new Date();

    const diferencia = ahora - fechaInicio;

    const segundos = Math.floor(diferencia / 1000);

    const dias = Math.floor(segundos / 86400);

    const horas = Math.floor((segundos % 86400) / 3600);

    const minutos = Math.floor((segundos % 3600) / 60);

    const seg = segundos % 60;

    colocar("days",dias);

    colocar("hours",horas);

    colocar("minutes",minutos);

    colocar("seconds",seg);

}

/* ===========================================
   ACTUALIZAR HTML
=========================================== */

function colocar(id,valor){

    const elemento = document.getElementById(id);

    if(!elemento) return;

    elemento.textContent = String(valor).padStart(2,"0");

}