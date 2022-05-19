const mongoose= require('mongoose');
const Schema =mongoose.Schema;

const ofertaSchema=Schema({
  Id_fijado:String,
  Pretencion_salarial_min:Number,
  Pretencion_salarial_max:Number,
  Rubro_trabajo:String,  
});
const demandaSchema=Schema({
  Id_fijado:String,
  Horario:String,
  Sueldo:Number,
});
const publicacionesSchema=Schema({
  //no se pide
  Fecha_inicio:String,
  Fecha_fin:String,
  //se pide
  Tipo_publicacion:String,
  Categoria:String,
  Ciudad:String,
  Pais:String,
  Moneda:String,
  Descripcion:String,
  Oferta:ofertaSchema,
  Demanda:demandaSchema
});

module.exports=mongoose.model('publicaciones',publicacionesSchema);
