/* ============================================
   MAIN.JS
============================================ */

document.addEventListener("DOMContentLoaded", () => {

    iniciarPagina();

});

function iniciarPagina(){

    pantallaBienvenida();

    revelarSecciones();

    frasesAutomaticas();

    botonSorpresa();

}

/* ============================================
   BIENVENIDA
============================================ */

function pantallaBienvenida(){

    const welcome = document.getElementById("welcome");

    const main = document.getElementById("mainContent");

    const boton = document.getElementById("enterButton");

    if(main){

        main.style.display = "none";

    }

    boton.addEventListener("click",()=>{

        welcome.style.opacity="0";

        welcome.style.pointerEvents="none";

        setTimeout(()=>{

            welcome.style.display="none";

            main.style.display="block";

            window.scrollTo({

                top:0,

                behavior:"smooth"

            });

        },700);

    });

}

/* ============================================
   REVEAL
============================================ */

function revelarSecciones(){

    const elementos=document.querySelectorAll(

        ".hero,.letter-section,.gallery,.counter,.quotes,.music,.surprise,.final"

    );

    elementos.forEach(el=>{

        el.classList.add("reveal");

    });

    function mostrar(){

        elementos.forEach(el=>{

            const top=el.getBoundingClientRect().top;

            const visible=window.innerHeight*0.85;

            if(top<visible){

                el.classList.add("active");

            }

        });

    }

    mostrar();

    window.addEventListener("scroll",mostrar);

}

/* ============================================
   FRASES
============================================ */

const frases=[

    "Eres mi lugar favorito ❤️",

    "Cada día contigo vale la pena.",

    "Gracias por existir.",

    "Tu sonrisa ilumina todo.",

    "Siempre elegiría caminar contigo.",

    "Los mejores recuerdos aún están por venir.",

    "Contigo cualquier día es especial.",

    "Eres una casualidad muy bonita.",

    "Mi felicidad tiene tu nombre.",

    "Te quiero muchísimo ❤️"

];

function frasesAutomaticas(){

    const texto=document.getElementById("quoteText");

    if(!texto) return;

    let i=0;

    texto.textContent=frases[0];

    setInterval(()=>{

        texto.style.opacity=0;

        setTimeout(()=>{

            i++;

            if(i>=frases.length){

                i=0;

            }

            texto.textContent=frases[i];

            texto.style.opacity=1;

        },300);

    },4000);

}

/* ============================================
   BOTÓN SORPRESA
============================================ */

function botonSorpresa(){

    const boton=document.getElementById("surpriseButton");

    if(!boton) return;

    boton.addEventListener("click",()=>{

        crearExplosion();

        alert("❤️ Gracias por ser parte de mi vida ❤️");

    });

}

/* ============================================
   EXPLOSIÓN DE CORAZONES
============================================ */

function crearExplosion(){

    for(let i=0;i<40;i++){

        const corazon=document.createElement("div");

        corazon.innerHTML="❤️";

        corazon.style.position="fixed";

        corazon.style.left="50%";

        corazon.style.top="50%";

        corazon.style.fontSize=Math.random()*20+20+"px";

        corazon.style.pointerEvents="none";

        corazon.style.zIndex="9999";

        const x=(Math.random()-0.5)*700;

        const y=(Math.random()-0.5)*700;

        corazon.animate([

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

        document.body.appendChild(corazon);

        setTimeout(()=>{

            corazon.remove();

        },1800);

    }

}

/* ============================================
   FIN
============================================ */