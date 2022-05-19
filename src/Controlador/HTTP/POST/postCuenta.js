var Persona=(rutas,passport,bd)=>
{
  rutas.post('/Micuentapersona',(req,res)=>
  {
    // console.log(req.body,req);
    var persona={
      Ci:req.body.ci, 
      Usuario:req.body.usuario,
      Nombres:req.body.nombre,
      Pais:req.body.pais,
      Ciudad:req.body.ciudad,
      Correo_persona:req.body.correo,
      Contraseña:req.body.contraseña,
      //Mi cuenta
      Apellidos:req.body.apellido,
      Celular:req.body.celular,
      Telefono_fijo:req.body.telefono,
     // Genero:no se ,
      Fecha_nacimiento:req.body.fechanac,
      Facebook:req.body.facebook,
      Direccion:req.body.direccion      
    };

    bd.cruds.crudPersona.modificar(persona,(r)=>{
      console.log("Persona modificada correctamente",JSON.stringify(r));
      res.redirect('/verPersona/'+r._id)
    });

  });


  rutas.post("/Crearpersona",passport.authenticate("Registrar-persona",
    {
      successRedirect:'/Micuentapersona' ,
      failureRedirect: '/Crearpersona',
      failureFlash: true
    })
  );
  
}



module.exports=Persona;
