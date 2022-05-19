var empresa=(rutas,bd)=>
{

  rutas.get('/CrearEmpresa',(req,res)=>
  {

    res.render("Páginas/Crearempresa");
  });

  rutas.get('/BuscarEmpresa',(req,res)=>
  {
    bd.cruds.crudEmpresa.ingresar(
      {
        Nombre_empresa:"Pil",
        Direccion_empresa:"Rio ",
        Area_empresa:"Tecnologia",
        Correo_empresa:"Isaac",
        Contraseña:"neroo",
        Latitud:78,
        Longitud:99
      }
    );
    res.render("Páginas/Buscarempresa");
  });


  rutas.get('/VerEmpresa/:id',(req,res)=>
  {
      var id=req.params.id;
      bd.cruds.crudEmpresa.buscar1(id,(empresa)=>
      {
        res.send(JSON.stringify(empresa))
          // res.render("Páginas/Verempresa",{
          //   empresa
          // });
      })
  });

}

module.exports=empresa;
