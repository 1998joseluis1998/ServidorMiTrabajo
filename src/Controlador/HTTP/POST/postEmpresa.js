var Empresa=(rutas,bd)=>
{
  rutas.post('/Crearempresa',(req,res)=>
  {
    // console.log(req.body,req);
    var empresa={
      //Cuenta
      Nit:req.body.nit,
      Foto_empresa:req.body.foto,
      Pais_empresa:req.body.pais,       
      Ciudad_empresa:req.body.ciudad, 
      Nombre_empresa:req.body.nombre,
      Nombre_responsable:req.body.responsable,
      Correo_empresa:req.body.correo,
      Contraseña:req.body.contraseña,        
      //Mi cuenta
      Descripcion_empresa:req.body.descripcion,
      Direccion_empresa:req.body.direccion,
      Area_empresa:req.body.area,
      Latitud:req.body.latitud,
      Longitud:req.body.longitud
      
    };

    bd.cruds.crudEmpresa.ingresar(empresa,(r)=>{
      console.log("Empresa ingresada correctamente",JSON.stringify(r));
      res.redirect('/verEmpresa/'+r._id)
    });

  });


}

module.exports=Empresa;
