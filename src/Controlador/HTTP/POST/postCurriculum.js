var Persona=(rutas,bd)=>
{
  rutas.post('/Micuentapersona',(req,res)=>
  {
    // console.log(req.body,req);
    var cv={
      //Cuenta
      curriculum:{
          Foto_persona:req.body.foto,
          Descripcion:req.body.descripcion,
          Formacion:{
            Formacion:req.body.formacion,
            Institucion:req.body.institucion,
            Desde:req.body.fdesde,
            Hasta:req.body.fhasta
          },
          Experiencia:{
            Cargo:req.body.cargo,
            Empresa:req.body.empresa,
            Desde:req.body.edesde,
            Hasta:req.body.ehasta,
            Descripcion:req.body.edescripcion
          },
          Habilidad:{
            Habilidad:req.body.habilidad,
            Nivel:req.body.hnivel
          },
          Idioma:{
            Idioma:req.body.idioma,
            Nivel:req.body.inivel
          }
          
      }
    };

    bd.cruds.crudPersona.modificar(empresa,(r)=>{
      console.log("Persona modificada correctamente",JSON.stringify(r));
      res.redirect('/verEmpresa/'+r._id)
    });

  });


}

module.exports=Empresa;
