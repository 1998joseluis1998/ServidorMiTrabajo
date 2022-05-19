var oferta=(rutas,bd)=>
{
  rutas.get('/PublicarOferta',(req,res)=>{
    res.render("Páginas/Publicaroferta");
  });

  rutas.get('/BuscarOferta',(req,res)=>{
      res.render("Páginas/Buscaroferta");
  });

  rutas.get('/VerOferta/:id',(req,res)=>
  {
      var id=req.params.id;
      bd.cruds.crudPublicaciones.buscar1(id,(ofer)=>
      {
        res.send(JSON.stringify(ofer))
           res.render("Páginas/VerOferta",{
          //   persona
          // });
      })
  });
});
}
module.exports=oferta;
