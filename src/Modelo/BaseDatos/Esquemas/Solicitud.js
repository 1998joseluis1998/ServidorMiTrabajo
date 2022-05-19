const mongoose= require('mongoose');
const Schema =mongoose.Schema;

const ofertaSchema=Schema({
  id_persona:String,
  id_empresa:String,
  Descripcion:String    
});

module.exports=mongoose.model('solicitudes',publicacionesSchema);