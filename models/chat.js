const { Schema, model } = require('mongoose');

 const chatSchema = Schema({
   email: {type: String},
   tipoPregunta: {type: String},
   mensaje: { type: String }
  
 }, {
   timestamps: true
 });

 module.exports = model("Chat", chatSchema);