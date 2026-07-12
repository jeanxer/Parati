/* ===========================================
   MUSIC.JS
=========================================== */

document.addEventListener("DOMContentLoaded", () => {

    iniciarMusica();

});

function iniciarMusica(){

    const audio = document.getElementById("song");
    const boton = document.getElementById("musicButton");

    if(!audio || !boton) return;

    audio.volume = 0.4;

    let reproduciendo = false;

    boton.addEventListener("click", () => {

        if(!reproduciendo){

            reproducir(audio, boton);

        }else{

            pausar(audio, boton);

        }

        reproduciendo = !reproduciendo;

    });

    audio.addEventListener("ended",()=>{

        boton.textContent="▶ Reproducir";

        boton.classList.remove("pulse");

        reproduciendo=false;

    });

}

/* ===========================================
   REPRODUCIR
=========================================== */

function reproducir(audio, boton){

    audio.play();

    boton.textContent="⏸ Pausar";

    boton.classList.add("pulse");

}

/* ===========================================
   PAUSAR
=========================================== */

function pausar(audio, boton){

    audio.pause();

    boton.textContent="▶ Reproducir";

    boton.classList.remove("pulse");

}

/* ===========================================
   EFECTO VISUAL
=========================================== */

document.addEventListener("DOMContentLoaded",()=>{

    const audio=document.getElementById("song");
    const boton=document.getElementById("musicButton");

    if(!audio || !boton) return;

    setInterval(()=>{

        if(!audio.paused){

            boton.style.transform="scale(1.05)";

            setTimeout(()=>{

                boton.style.transform="scale(1)";

            },250);

        }

    },1200);

});