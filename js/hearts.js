/* ===========================================
   HEARTS.JS
=========================================== */

document.addEventListener("DOMContentLoaded", () => {

    iniciarCorazones();

});

function iniciarCorazones(){

    const contenedor = document.getElementById("hearts");

    if(!contenedor) return;

    setInterval(()=>{

        crearCorazon(contenedor);

    },350);

}

function crearCorazon(contenedor){

    const heart = document.createElement("div");

    heart.className = "heart";

    const corazones = [

        "❤",
        "💖",
        "💕",
        "💗",
        "💓",
        "💞"

    ];

    heart.innerHTML = corazones[
        Math.floor(Math.random()*corazones.length)
    ];

    heart.style.left = Math.random()*100 + "vw";

    heart.style.fontSize = (18 + Math.random()*30) + "px";

    heart.style.animationDuration =

        (5 + Math.random()*5) + "s";

    heart.style.opacity =

        (0.5 + Math.random()*0.5);

    contenedor.appendChild(heart);

    heart.animate(

        [

            {
                transform:"translateY(0) rotate(0deg)",
                opacity:0
            },

            {
                opacity:1,
                offset:.1
            },

            {
                transform:"translateY(-110vh) rotate(360deg)",
                opacity:0
            }

        ],

        {

            duration:

            (5000 + Math.random()*5000),

            easing:"linear"

        }

    );

    setTimeout(()=>{

        heart.remove();

    },10000);

}