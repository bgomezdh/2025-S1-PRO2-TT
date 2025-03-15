/* requerir el express */
const express = require('express');
const router = express.Router();
const libros = require('../db/libros');


/* configurar los sufijos */
router.get('/', function(req, res) {
    return res.send(libros.lista)
});

router.get('/filtrar/:nombre/:apellido', function(req, res){
    let autorBuscado = req.params.nombre;
    let apellidoBuscado = req.params.apellido;
    return res.send(libros.filtrarPorAuto(autorBuscado));
});


router.get('/annio/:annio?', function(req, res){
    let annioBuscado = req.params.annio;

    if (annioBuscado != undefined) {
        return res.send("Año enviado :" + annioBuscado)
    } else {
        return res.send("No enviastes el año amigo.");
    }
})

/* exportar el router */
module.exports = router;