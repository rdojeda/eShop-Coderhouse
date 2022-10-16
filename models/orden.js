const { Schema, model } = require("mongoose");

const OrdenSchema = Schema({
  usuario: { type: Schema.Types.ObjectId, ref: "Usuario" },
  orden: [{
    carrito: { type: Schema.Types.ObjectId, ref: "Carrito" },
    cantidad: Number
  }],
  total: {type: Number}

});


module.exports = model("Orden", OrdenSchema);
