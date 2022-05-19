var Titulo=(rutas,bd)=>
{
  rutas.post('/Creartitulo',(req,res)=>
  {
    // console.log(req.body,req);
    var titulo={
      Titulo:req.body.titulo,
      Categoria:req.body.categoria
    };
    console.log("llega: ", titulo)
    bd.cruds.crudTitulo.ingresar(titulo,(r)=>{
      console.log("Titulo ingresado correctamente",JSON.stringify(r));
      res.redirect('/Crearpersona/');
    });

  });

}

module.exports=Titulo;
