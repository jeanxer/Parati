/* ===========================================
   LETTER.JS
=========================================== */

document.addEventListener("DOMContentLoaded", () => {

    iniciarCarta();

});

function iniciarCarta(){

    const boton = document.getElementById("openLetter");
    const carta = document.querySelector(".letter");

    if(!boton || !carta) return;

    let abierta = false;

    boton.addEventListener("click", () => {

        if(!abierta){

            carta.classList.add("open");

            boton.textContent = "Cerrar Carta 💌";

            lanzarCorazones();

            abierta = true;

        }else{

            carta.classList.remove("open");

            boton.textContent = "Abrir Carta 💌";

            abierta = false;

        }

    });

}

/* ===========================================
   CORAZONES
=========================================== */

function lanzarCorazones(){

    for(let i=0;i<25;i++){

        const heart=document.createElement("div");

        heart.innerHTML="❤️";

        heart.style.position="fixed";

        heart.style.left=(window.innerWidth/2)+"px";

        heart.style.top=(window.innerHeight/2)+"px";

        heart.style.fontSize=(18+Math.random()*20)+"px";

        heart.style.pointerEvents="none";

        heart.style.zIndex="9999";

        const x=(Math.random()-0.5)*700;
        const y=(Math.random()-0.5)*700;

        heart.animate([

            {
                transform:"translate(0,0) scale(1)",
                opacity:1
            },

            {
                transform:`translate(${x}px,${y}px) scale(0)`,
                opacity:0
            }

        ],{

            duration:1800,

            easing:"ease-out"

        });

        document.body.appendChild(heart);

        setTimeout(()=>{

            heart.remove();

        },1800);

    }

}

/* ===========================================
   BRILLO
=========================================== */

document.addEventListener("DOMContentLoaded",()=>{

    const carta=document.querySelector(".letter");

    if(!carta) return;

    carta.addEventListener("mouseenter",()=>{

        carta.style.boxShadow="0 0 40px rgba(255,255,255,.6)";

    });

    carta.addEventListener("mouseleave",()=>{

        carta.style.boxShadow="";

    });

});