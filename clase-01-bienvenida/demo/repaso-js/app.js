//imprimir valores por terminal
console.log("un pequeño mensaje");

// variables y constantes
let nombre = "brian";



const pi = 3.1416565;

const url = "www.googlecom";

let validacion = false;

/* if (validacion) {
    console.log("El contenido es verdadero");
}else{
    console.log("el contenido es falso");
} */

/* let edad = 31;

if (edad != 18) {
    console.log("puedes ingresar a la bresh");
} else {
    console.log("Noooo puedes ingresar a la bresh");
} */

    /* arrays */

/* let listadoEdades = [34,23,12,45,67,78,45,34,12];
let nuevaLista = [];

for (let i = 0; i < listadoEdades.length; i++) {
    const element = listadoEdades[i];
    if (element >= 30) {
        nuevaLista.push(element);
    }
}

console.log(nuevaLista); */

/* Objetos listerales */

let apuntador = {
    color: "negro",
    marca: "logitec",
    encender: function(){
        return "el apuntador " + this.marca + " esta encendido"; //concatenar
    },
    apagar: function(){
        return `El apuntador ${this.color} esta apagado`; //Templatering
    }
};

/* console.log(apuntador.encender());

console.log(apuntador.apagar());
 */

let apuntadorA = {
    color: "negro",
    marca: "logitec",
    encender: function(){
        return "el apuntador " + this.marca + " esta encendido"; //concatenar
    },
    apagar: function(){
        return `El apuntador ${this.color} esta apagado`; //Templatering
    }
};

let apuntadorB = {
    color: "negro",
    marca: "logitec",
    encender: function(){
        return "el apuntador " + this.marca + " esta encendido"; //concatenar
    },
    apagar: function(){
        return `El apuntador ${this.color} esta apagado`; //Templatering
    }
};

let apuntadorC = {
    color: "negro",
    marca: "logitec",
    encender: function(){
        return "el apuntador " + this.marca + " esta encendido"; //concatenar
    },
    apagar: function(){
        return `El apuntador ${this.color} esta apagado`; //Templatering
    }
};



let listadoApuntadores = [apuntadorA, apuntadorB, apuntadorC];


function pasarTextoAMayusculas(textoMinusculas) {
    return textoMinusculas.toUpperCase();
}


function pasarTextoAMinusculas(textoMayusculas) {
    return textoMayusculas.toLowerCase();
}


console.log(pasarTextoAMinusculas("HOLA ALUMNOS"));
