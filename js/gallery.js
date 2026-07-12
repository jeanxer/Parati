/* ===========================================
   GALLERY.JS
=========================================== */

document.addEventListener("DOMContentLoaded", () => {
    iniciarGaleria();
});

function iniciarGaleria(){

    const imagenes = document.querySelectorAll(".gallery-grid img");

    if(imagenes.length === 0) return;

    // Crear visor
    const visor = document.createElement("div");
    visor.id = "lightbox";

    visor.innerHTML = `
        <span id="closeLightbox">&times;</span>
        <img id="lightboxImage" src="" alt="">
        <button id="prevImage">❮</button>
        <button id="nextImage">❯</button>
    `;

    document.body.appendChild(visor);

    const imagenGrande = document.getElementById("lightboxImage");
    const cerrar = document.getElementById("closeLightbox");
    const anterior = document.getElementById("prevImage");
    const siguiente = document.getElementById("nextImage");

    let indice = 0;

    function abrir(i){

        indice = i;

        imagenGrande.src = imagenes[indice].src;

        visor.classList.add("show");

        document.body.style.overflow = "hidden";

    }

    function cerrarVisor(){

        visor.classList.remove("show");

        document.body.style.overflow = "auto";

    }

    function mostrarAnterior(){

        indice--;

        if(indice < 0){

            indice = imagenes.length - 1;

        }

        imagenGrande.src = imagenes[indice].src;

    }

    function mostrarSiguiente(){

        indice++;

        if(indice >= imagenes.length){

            indice = 0;

        }

        imagenGrande.src = imagenes[indice].src;

    }

    imagenes.forEach((img,i)=>{

        img.addEventListener("click",()=>{

            abrir(i);

        });

    });

    cerrar.addEventListener("click",cerrarVisor);

    visor.addEventListener("click",(e)=>{

        if(e.target===visor){

            cerrarVisor();

        }

    });

    anterior.addEventListener("click",mostrarAnterior);

    siguiente.addEventListener("click",mostrarSiguiente);

    document.addEventListener("keydown",(e)=>{

        if(!visor.classList.contains("show")) return;

        if(e.key==="Escape") cerrarVisor();

        if(e.key==="ArrowLeft") mostrarAnterior();

        if(e.key==="ArrowRight") mostrarSiguiente();

    });

}