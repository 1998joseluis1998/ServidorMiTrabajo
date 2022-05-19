var ver=(rutas,bd)=>
{
    rutas.get('/VerPagina',(req,res)=>{
    res.render("Páginas/Ver");
      });
}

module.exports=ver;
