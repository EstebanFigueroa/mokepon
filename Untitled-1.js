//ACA VAMOS A EMPEZAR A TRABAJAR CON CLASES - PROGRAMACION ORIENTADA A OBJETOS
//Usamos la palabra reservada class. El nombre de la clase empieza con mayuscula
//Luego debemos declarar el constructor del objeto
//Luego this para hacer referencia a las propiedades

class Mokepon {
    constructor(nombre, foto, vida) {
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
    }
}
//Con new vamos a construir un objeto a partir de la clase Mokepon
let hipodoge = new Mokepon("Hipodoge", 'img\mokepons_mokepon_hipodoge_attack.png', 5)
let capipepo = new Mokepon("Capipepo", 'img\mokepons_mokepon_capipepo_attack.png', 5)
let ratigueya = new Mokepon("Ratigueya", 'img\mokepons_mokepon_ratigueya_attack.png', 5)




    //vamos a iterar los arreglos
    mokepones.forEach((mokepon) => {
        opcionDeMokepones = `
        <label class="tarjeta-de-mokepon" for=${mokepon.nombre}>
        <div class="mascota-container">
            <div class="mascota"><img src="img\mokepons_mokepon_hipodoge_attack.png" alt=""> </div>
        </div>
        <img src=${mokepon.foto} alt="">
        <span class="nombre-mascota"><input type="radio" name="mascota" id=${mokepon.nombre}/>Hipodoge</span>
    </label>        
        `
        contenedorTarjetas.innerHTML=opcionDeMokepones
    })