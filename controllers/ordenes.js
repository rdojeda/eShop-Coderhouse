const { Ordenes } = require("../models/orden");
const emailer = require("../helpers/emailer.js");

//Cargar Nueva Orden 
const nuevaOrden = async (req, res, next) => {
    const orden = new Ordenes(req.body);
    try {
        await orden.save();
        //Envio de mail 
        emailer.sendMailOrden(orden)        
        res.json({ mensaje: "Se agregó una nueva orden" })
        
    } catch (error) {
        console.log(error)
        next();
    }
    
}
//Mostrar todas las ordenes
const mostrarOrdenes = async (req, res, next) => {
    try {
        const ordenes = await Ordenes.find({}).populate('usuario').populate({
            path: 'orden.producto',
            model: 'Carrito'
        })
        res.json(ordenes)
    } catch (error) {
        console.log(error);
        next();
    }
}

//Mostrar una orden por su Id 
const mostrarOrden = async (req, res, next) => {
    const orden = await Ordenes.findById(req.params.idOrden).populate('usuario').populate({
        path: 'orden.producto',
        model: 'Carrito'
    })

    if (!orden) {
        res.json({ mensaje: "El pedido no existe" });
        return next();
    }

    //Mostrar el pedido
    res.json(orden)
}

//Actualizar una Orden 
const actualizarOrden = async (req, res, next) => {
    try {
        let orden = await Ordenes.findOneAndUpdate(
          { _id: req.params.idOrden },
          req.body,
          { new: true }
        )
          .populate("usuario")
          .populate({
            path: "orden.producto",
            model: "Carrito",
          });

        res.json(orden)

    } catch (error) {
        console.log(error);
        next();
    }
}

//Eliminar una Orden por su Id
const eliminarOrden = async (req, res, next) => {
    try {
        await Ordenes.findOneAndDelete({ _id: req.params.idOrden})
        res.jsons({ mensaje: "La orden ha sido eliminada" });

    } catch (error) {
        console.log(error);
        next();
    }
}

module.exports = { nuevaOrden, mostrarOrdenes, mostrarOrden, actualizarOrden, eliminarOrden }