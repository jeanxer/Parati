/* ===========================================
   STARS.JS
=========================================== */

document.addEventListener("DOMContentLoaded", () => {

    iniciarEstrellas();

});

function iniciarEstrellas(){

    const contenedor = document.getElementById("stars");

    if(!contenedor) return;

    crearFondo(contenedor);

    setInterval(()=>{

        estrellaFugaz(contenedor);

    },8000);

}

/* ===========================================
   ESTRELLAS FIJAS
=========================================== */

function crearFondo(contenedor){

    const cantidad = 120;

    for(let i=0;i<cantidad;i++){

        const estrella = document.createElement("div");

        estrella.className = "star";

        estrella.style.left = Math.random()*100+"vw";

        estrella.style.top = Math.random()*100+"vh";

        const size = Math.random()*3+1;

        estrella.style.width = size+"px";
        estrella.style.height = size+"px";

        estrella.style.animationDelay =

            Math.random()*5+"s";

        estrella.style.animationDuration =

            (2+Math.random()*3)+"s";

        contenedor.appendChild(estrella);

    }

}

/* ===========================================
   ESTRELLA FUGAZ
=========================================== */

function estrellaFugaz(contenedor){

    const shooting=document.createElement("div");

    shooting.className="shooting-star";

    shooting.style.left=Math.random()*70+"vw";

    shooting.style.top=Math.random()*35+"vh";

    contenedor.appendChild(shooting);

    setTimeout(()=>{

        shooting.remove();

    },1500);

}