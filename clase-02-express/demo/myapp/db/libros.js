const libros = {
    lista: [
        {
            id: 1,
            titulo: "tituloA",
            autor: "carlos",
            annio: 2022
        },
        {
            id: 2,
            titulo: "tituloB",
            autor: "luis",
            annio: 2022
        },
        {
            id: 3,
            titulo: "tituloC",
            autor: "brian",
            annio: 2023
        },
    ],
    filtrarPorAuto: function(autorBuscado){
        let librosEncontrados = [];

        for (let i = 0; i < this.lista.length; i++) {
            const element = this.lista[i];

            if (element.autor == autorBuscado) {
                librosEncontrados.push(element);
            }
            
        }

        return librosEncontrados;

    }
}

module.exports = libros;