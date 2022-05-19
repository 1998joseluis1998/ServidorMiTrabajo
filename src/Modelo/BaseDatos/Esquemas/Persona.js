const mongoose= require('mongoose');
const Schema =mongoose.Schema;

const formacionSchema=Schema({
  Formacion:String,
  Institucion:String,
  Desde:String,
  Hasta:String
})
const experieniaSchema=Schema({
  Cargo:String,
  Empresa:String,
  Desde:String,
  Hasta:String,
  Descripcion:String
})
const habilidadSchema=Schema({
  Habilidad:String,
  Nivel:String
})
const idiomaSchema=Schema({
  Idioma:String,
  Nivel:String
})

const curriculumSchema=Schema({
  Foto_persona:String,
  Descripcion:String,
  Formacion:[formacionSchema],
  Experiencia:[experieniaSchema],
  Habilidad:[habilidadSchema],
  Idioma:[idiomaSchema]
});


const personaSchema=Schema({
  //Crear persona
  Ci:Number,
  Usuario:String,
  Nombres:String,
  Pais:String,
  Ciudad:String,
  Correo_persona:String,
  Contraseña:String,
  //Mi cuenta
  Apellidos:String,
  Celular:Number,
  Telefono_fijo:Number,
  Genero:String,
  Fecha_nacimiento:String,  
  Facebook:String,
  Direccion:String,
  //no se :V 
  CurriculumVitae:curriculumSchema,
});

module.exports=mongoose.model('personas',personaSchema);
