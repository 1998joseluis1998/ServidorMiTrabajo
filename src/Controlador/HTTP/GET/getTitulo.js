var ver=(rutas,bd)=>
{
  rutas.get('/Ver',(req,res)=>{
    res.render("Páginas/Ver");
  });

}



module.exports=ver;
