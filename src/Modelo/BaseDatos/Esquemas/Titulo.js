const mongoose= require('mongoose');
const Schema =mongoose.Schema;

const tituloSchema=Schema({
  Titulo:String,
  Categoria:String
});

module.exports=mongoose.model('titulos',tituloSchema);
