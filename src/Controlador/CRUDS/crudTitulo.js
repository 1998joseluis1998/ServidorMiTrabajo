module.exports =new crud();

function crud()
{
  const Titulo= require('./../../Modelo/BaseDatos/Esquemas/Titulo.js');
  var tabla= "Titulo";

  //funciones

  this.ingresar =(datos,callback)=>
  {
    var titulo=new Titulo(datos);
    titulo.save((error,res)=>
    {
      if(!error)
      {
        callback(res);
      }
      else
      {
        console.log("Error ingresando en la tabla: "+ tabla +" - ",error);
      }
    });
  }

  this.eliminar =(cod_titulo,callback)=>
  {
    Titulo.deleteone({"_id":cod_titulo},(error,res)=>
    {
      if(!error)
      {
        callback(res);
      }
      else
      {
        console.log("Error eliminando en la tabla: "+tabla+"-",error);
      }

    });
  }

  this.buscar = (callback)=>
  {
    Titulo.find((error,res)=>
    {
      if(!error)
      {
        callback(res);
        console.log("titulos:",res)
      }
      else
      {
        console.log("error buscando a uno en la tabla: "+tabla+"-",error);
      }
    });
  }
  
  //cierra funciones

  //cierra crud
}
