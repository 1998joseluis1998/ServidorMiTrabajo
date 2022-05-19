var curriculum=(rutas,bd)=>
{
  rutas.get('/BuscarCV',(req,res)=>{
    res.render("Páginas/Buscarcv");
  });

  rutas.get('/PublicarCV',(req,res)=>{
    res.render("Páginas/Publicarcv")
  });

}

module.exports=curriculum;
