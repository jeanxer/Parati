/* ===========================================
   PETALS.JS
=========================================== */

document.addEventListener("DOMContentLoaded", () => {

    iniciarPetalos();

});

function iniciarPetalos(){

    const contenedor = document.getElementById("petals");

    if(!contenedor) return;

    setInterval(()=>{

        crearPetalo(contenedor);

    },250);

}

function crearPetalo(contenedor){

    const petalo = document.createElement("div");

    petalo.className = "petal";

    petalo.style.left = Math.random()*100 + "vw";

    petalo.style.top = "-40px";

    const size = 12 + Math.random()*20;

    petalo.style.width = size + "px";
    petalo.style.height = size + "px";

    petalo.style.opacity = 0.5 + Math.random()*0.5;

    petalo.style.animationDuration =

        (6 + Math.random()*6) + "s";

    petalo.style.animationTimingFunction = "linear";

    contenedor.appendChild(petalo);

    let x = Math.random()*window.innerWidth;
    let y = -50;

    let angle = Math.random()*360;
    let speed = 1 + Math.random()*2;
    let drift = Math.random()*2 - 1;

    function animar(){

        y += speed;

        x += Math.sin(y/40) * drift;

        angle += 2;

        petalo.style.transform = `
            translate(${x}px, ${y}px)
            rotate(${angle}deg)
        `;

        if(y < window.innerHeight + 60){

            requestAnimationFrame(animar);

        }else{

            petalo.remove();

        }

    }

    requestAnimationFrame(animar);

}