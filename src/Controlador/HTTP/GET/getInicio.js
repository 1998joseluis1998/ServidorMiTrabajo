var inicio=(rutas,bd)=>
{
  rutas.get('/',(req,res)=>{
    res.render("Páginas/Inicio")
  });

  
}

module.exports=inicio;
