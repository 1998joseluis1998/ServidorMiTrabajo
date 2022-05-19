var persona=(rutas,bd)=>
{

rutas.get('/CrearPersona',(req,res)=>{
  bd.cruds.crudTitulo.buscar((titulos)=>
  {
    res.render("Páginas/Crearpersona",{
      titulos
    });
  })
});

rutas.get('/VerPersona/:id',(req,res)=>
{
    var id=req.params.id;
    bd.cruds.crudPersona.buscar1(id,(persona)=>
    {
      res.send(JSON.stringify(persona))
        // res.render("Páginas/VerPersona",{
        //   persona
        // });
    })
});


}

module.exports=persona;
