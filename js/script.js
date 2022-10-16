//CONSEJO DE PROGRAMADOR: DON'T REPEAT YOURSELF!
// VARIABLES DE iniciarJuego()
const ocultarBtnReiniciar = document.getElementById("btn-reiniciar");
const ocultarAtaque = document.getElementById("seleccionar-ataque");
const btnMascota = document.getElementById('btn-mascotas');
const btnFuego = document.getElementById("btn-fuego");
const btnAgua = document.getElementById("btn-agua");
const btnTierra = document.getElementById("btn-tierra");
const btnReiniciar = document.getElementById("btn-reiniciar")
//VARIABLES DE SeleccionarMascotaJugador()
const ocultarMascota = document.getElementById("seleccionar-mascota");

const hipo = document.getElementById("hipodoge");
const capi = document.getElementById("capipepo");
const rati = document.getElementById("ratigueya");

const mascotaJugador = document.getElementById("mascota-jugador");
//VARIABLES DE seleccionarMascotaEnemigo
const mascotaEnemigo = document.getElementById("mascota-enemigo");
//VARIABLES DE combate()
const spanVidasJugador = document.getElementById("vidas-jugador")
const spanVidasEnemigo = document.getElementById("vidas-enemigos")
//VARIABLES DE crearMensaje()
const sectionMensajes = document.getElementById('mensajes')
const jugador = document.getElementById("ataqueJugador")
const enemigo = document.getElementById("ataqueEnemigo")
//VARIABLES DE mensajeFinal()
const sectionMensajesFinal = document.getElementById('mensajes')
//
const contenedor = document.getElementById("contenedorTarjetas")
//
let mokepones = []
//

let ataqueJugador; //Varibles globales para que las funciones puedan acceder desde fuera
let ataqueEnemigo;
let vidaEnemigo = 3;
let vidaJugador = 3;
let opcionDeMokepones // esta variable la vamos a usar para inyectar el HTML

//ACA VAMOS A EMPEZAR A TRABAJAR CON CLASES - PROGRAMACION ORIENTADA A OBJETOS
//Usamos la palabra reservada class. El nombre de la clase empieza con mayuscula
//Luego debemos declarar el constructor del objeto
//Luego this para hacer referencia a las propiedades

class Mokepon {
    constructor(nombre, foto, vida, fotobg) {
        this.nombre = nombre
        this.foto = foto
        this.fotobg = fotobg
        this.vida = vida
        this.ataques = []
    }
}
//Con new vamos a construir un objeto a partir de la clase Mokepon. Estos objetos son INSTANCIAS de la CLASE Mokepon
let hipodoge = new Mokepon("Hipodoge", 'img/mokepons_mokepon_hipodoge_attack.png', 5, 'img/bg.png' )
let capipepo = new Mokepon("Capipepo", 'img/mokepons_mokepon_capipepo_attack.png', 5, 'img/bg.png')
let ratigueya = new Mokepon("Ratigueya", 'img/mokepons_mokepon_ratigueya_attack.png', 5, 'img/bg.png')

hipodoge.ataques.push( //aca voy a construir un objeto literal, que vive dentro de este objeto
    { nombre: "💧", id: "btn-agua" },
    { nombre: "💧", id: "btn-agua" },
    { nombre: "💧", id: "btn-agua" },
    { nombre: "🔥", id: "btn-fuego" },
    { nombre: "🌼", id: "btn-tierra" }
)
capipepo.ataques.push( //aca voy a construir un objeto literal, que vive dentro de este objeto
    { nombre: "🌼", id: "btn-tierra" },
    { nombre: "🌼", id: "btn-tierra" },
    { nombre: "🌼", id: "btn-tierra" },
    { nombre: "🔥", id: "btn-fuego" },
    { nombre: "💧", id: "btn-agua" },
)
ratigueya.ataques.push( //aca voy a construir un objeto literal, que vive dentro de este objeto
    { nombre: "🔥", id: "btn-fuego" },
    { nombre: "🔥", id: "btn-fuego" },
    { nombre: "🔥", id: "btn-fuego" },
    { nombre: "🌼", id: "btn-tierra" },
    { nombre: "💧", id: "btn-agua" },
)

mokepones.push(hipodoge, capipepo, ratigueya)

function iniciarJuego() { //Este función se ejecuta cuando se carga el documento HTML, al final de este código está la función window load que contiene a iniciarJuego
    ocultarBtnReiniciar.style.display = "none"
    //vamos a iterar los arreglos
    mokepones.forEach((mokepon) => {
        opcionDeMokepones = `
        <label class="tarjeta-de-mokepon" for=${mokepon.nombre}>
            <div class="mascota-container">
                <div class="mascota"><img src=${mokepon.foto} alt=""> </div>
            </div>
            <img src=${mokepon.fotobg} alt="">
            <span class="nombre-mascota"><input type="radio" name="mascota" id=${mokepon.nombre}/>${mokepon.nombre}</span>
        </label>
        `
        contenedor.innerHTML += opcionDeMokepones
        console.log(contenedorTarjetas)
    })
    ocultarAtaque.style.display = "none";
    btnMascota.addEventListener('click', seleccionarMascotaJugador);
    btnFuego.addEventListener("click", ataqueFuego)
    btnAgua.addEventListener("click", ataqueAgua)
    btnTierra.addEventListener("click", ataqueTierra);
    btnReiniciar.addEventListener("click", reiniciar);
}
function seleccionarMascotaJugador() { //En esta función verificamos que elección hizo el usuario en los inputs HTML con la propiedad .checked y lo almacenamos en una variable. Posteriormente disparamos un alert que verifica la elección del usuario a través de una verificación verdadero, falso.    
    ocultarMascota.style.display = "none";    
    ocultarAtaque.style.display = "flex";

    if (hipo) {
        mascotaJugador.innerHTML = "Hipodoge";
    }
    else if (capi) {
        mascotaJugador.innerHTML = "Capipepo";
    }
    else if (rati) {
        mascotaJugador.innerHTML = "Ratigueya";
    }
    else {
        alert("Debes elegir una mascota")//Esto se dispara cuando no eligen ninguna de las opciones
    }

    seleccionarMascotaEnemigo()
}
function seleccionarMascotaEnemigo() { //Esta funcion utiliza la funcion asistente aleatorio() para que elija aleatoriamente un numero entre uno y tres para realizar el ataque.
    let ataqueAleatorio = aleatorio(1, 3);
    if (ataqueAleatorio == 1) {
        mascotaEnemigo.innerHTML = "Hipodoge"
    }
    else if (ataqueAleatorio == 2) {
        mascotaEnemigo.innerHTML = "Capipepo"
    }
    else {

        mascotaEnemigo.innerHTML = "Ratigueya"
    }
}
function ataqueFuego() {
    ataqueJugador = "🔥";
    ataqueAleatorioEnemigo();
}
function ataqueAgua() {
    ataqueJugador = "💧";
    ataqueAleatorioEnemigo();

}
function ataqueTierra() {
    ataqueJugador = "🌼";
    ataqueAleatorioEnemigo();
}
function ataqueAleatorioEnemigo() {
    let numeroDeAtaqueAleatorio = aleatorio(1, 3)
    if (numeroDeAtaqueAleatorio == 1) {
        ataqueEnemigo = "🔥"
    } else if (numeroDeAtaqueAleatorio == 2) {
        ataqueEnemigo = "💧"
    } else {
        ataqueEnemigo = "🌼"
    }
    //La función crearMensaje() la debemos llamar una vez que tenemos el ataque del jugador y del ataque enemigo, por lo tanto lo correcto siguiendo el flujo del código sería llamarla en esta función
    combate()
}
function combate() {
    //Aca vinculamos las vidas, logicamente porque despues del combate sabemos cuantas vidas nos quedan
    if (ataqueEnemigo == ataqueJugador) {
        crearMensaje("EMPATE 👯‍♂️") //aca llenamos el string vacio que pasamos como argumento en la funcion crearMensaje()
    } else if (ataqueJugador == '🔥' && ataqueEnemigo == '🌼') {
        crearMensaje("GANASTE😎🤘")
        vidaEnemigo--
        spanVidasEnemigo.innerHTML = vidaEnemigo + "💔";
    } else if (ataqueJugador == '💧' && ataqueEnemigo == '🔥') {
        crearMensaje("GANASTE😎🤘")
        vidaEnemigo--
        spanVidasEnemigo.innerHTML = vidaEnemigo + "💔";
    } else if (ataqueJugador == '🌼' && ataqueEnemigo == '💧') {
        crearMensaje("GANASTE😎🤘")
        vidaEnemigo--
        spanVidasEnemigo.innerHTML = vidaEnemigo + "💔";
    } else {
        crearMensaje("PERDISTE😫")
        vidaJugador--
        spanVidasJugador.innerHTML = vidaJugador + "💔";
    }
    revisarVidas()
}
function revisarVidas() {
    if (vidaEnemigo == 0) {
        mensajeFinal("ERES EL CRACK DE LOS CRACK!😁")
    } else if (vidaJugador == 0) {
        mensajeFinal("LO LOGRARÁS LA PRÓXIMA!😣")
    }

}
function crearMensaje(resultado) { //Este argumento de funcion queda como un string vacio. Luego en la funcion combate llamamos a la funcion crearMensaje() y como tiene un string vacio como argumento, ahi colocamos el resultado del combate. Mira la funcion combate()
    let pjugador = document.createElement("p")
    let penemigo = document.createElement("p")
    sectionMensajes.innerHTML = resultado
    pjugador.innerHTML = ataqueJugador
    penemigo.innerHTML = ataqueEnemigo
    jugador.appendChild(pjugador)
    enemigo.appendChild(penemigo)
}
function mensajeFinal(resultadoFinal) {
    let parrafo = document.createElement('p')
    parrafo.innerHTML = resultadoFinal;
    sectionMensajesFinal.appendChild(parrafo)
    //Botones de ataque deshabilitados    
    btnFuego.disabled = true
    btnAgua.disabled = true
    btnTierra.disabled = true

    ocultarBtnReiniciar.style.display = "block"
}
function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}
function reiniciar() {
    location.reload()
}
window.addEventListener("load", iniciarJuego);