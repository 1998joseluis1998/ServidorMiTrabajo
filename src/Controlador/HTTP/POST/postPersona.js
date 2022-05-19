var Persona=(rutas,bd)=>
{
  rutas.post('/Crearpersona',(req,res)=>
  {
    // console.log(req.body,req);
    var persona={
      //Cuenta
      Ci:req.body.ci,
      Nombres:req.body.nombre,           
      Pais:req.body.pais,       
      Ciudad:req.body.ciudad,       
      Correo_persona:req.body.correo,
      Contraseña:req.body.contraseña,

      //Mi cuenta
      Apellido_paterno:req.body.apep,
      Apellido_materno:req.body.apem,
      Nacionalidad:req.body.nacionalidad,
      Fecha_nacimiento:req.body.fechanac,
      Titulo:req.body.titulo,
      CurriculumVitae:
      {
        Descripcion:req.body.curriculum
      }
      //Trabajos_anteriores:JSON.parse(req.body.trabajos)
    };

    bd.cruds.crudPersona.ingresar(persona,(r)=>{
      console.log("Persona ingresada correctamente",JSON.stringify(r));
      res.redirect('/VerPersona/'+r._id)
    });
  });

}

module.exports=Persona;
