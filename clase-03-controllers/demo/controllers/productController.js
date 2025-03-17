const autos = require('../db/index');

const productController = {
    index: function (req, res) {

        return res.render('autos', {listado : autos.lista,
                                    habilitado: true
        });
    },
    filtrarMarca: function(req, res) {

        const marcaBuscada = req.params.brand;
        let listadoEncontrado = [];
    
        for (let i = 0; i < autos.lista.length; i++) {
            const element =  autos.lista[i];
    
            if (element.marca == marcaBuscada) {
                listadoEncontrado.push(element);
            }
            
        }
    
        return res.send(listadoEncontrado)
    }
}

module.exports = productController;