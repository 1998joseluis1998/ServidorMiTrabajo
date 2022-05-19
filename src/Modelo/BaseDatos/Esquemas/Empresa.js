const mongoose= require('mongoose');
const Schema =mongoose.Schema;

const empresaSchema=Schema({
  //Crear cuenta
  Nit:String,
  Usuario:String,
  Nombre_empresa:String,
  Nombre_encargado:String,
  Pais_empresa:String,
  Ciudad_empresa:String,
  Foto_empresa:String,
  Correo_empresa:String,
  Contraseña:String,
  //Mi cuenta
  Telefono_empresa:Number,
  SitioWeb_empresa:String,
  Descripción_empresa:String,
  Direccion_empresa:String,
  Latitud:Number,
  Longitud:Number
});

module.exports=mongoose.model('empresas',empresaSchema);
