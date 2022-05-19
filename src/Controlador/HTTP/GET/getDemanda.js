var demanda=(rutas,bd)=>
{
  rutas.get('/PublicarDemanda',(req,res)=>{
    res.render("Páginas/Publicardemanda");
  });

  rutas.get('/BuscarDemanda',(req,res)=>{
    res.render("Páginas/Buscardemanda");
  });

  rutas.get('/VerDemanda/:id',(req,res)=>
  {
      var id=req.params.id;
      bd.cruds.crudPublicaciones.buscar1(id,(ofer)=>
      {
        res.send(JSON.stringify(ofer))
           res.render("Páginas/VerDemanda",{
          //   persona
          // });
      })
  });
});


}

module.exports=demanda;
