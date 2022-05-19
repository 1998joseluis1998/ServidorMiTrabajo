var cuenta=(rutas,bd)=>
{
  rutas.get('/IniciarSesion',(req,res)=>{
    res.render("Páginas/IniciarSesion");
  });

  rutas.get('/Micuentaempresa',(req,res)=>{
    res.render("Páginas/Micuentaempresa");
  });

  rutas.get('/Micuentapersona',(req,res)=>{
    res.render("Páginas/Micuentapersona");
  });

}
  
module.exports=cuenta;
