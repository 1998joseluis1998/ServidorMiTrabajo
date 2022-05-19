module.exports =new crud();

function crud()
{
  const PublicacionesOD= require('./../../Modelo/BaseDatos/Esquemas/PublicacionesOD.js');
  var tabla= "PublicacionesOD";

  //funciones

  this.ingresar =(datos,callback)=>
  {
    var publicacion=new PublicacionesOD(datos);
    publicacion.save((error,res)=>
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

  this.modificar =(cod_publicacion,datosnuevos,callback)=>
  {
    PublicacionesOD.update({"_id":cod_publicacion},datosnuevos,(error,res)=>
    {
      if(!error)
      {
        callback(res);
      }
      else
      {
        console.log("Error modificando en la tabla: "+tabla+"-",error);
      }
    });
  }

  this.eliminar =(cod_publicacion,callback)=>
  {
    PublicacionesOD.deleteone({"_id":cod_publicacion},(error,res)=>
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

  this.buscar1 = (cod_publicacion,callback)=>
  {
    PublicacionesOD.findOne({"_id":cod_publicacion},(error,res)=>
    {
      if(!error)
      {
        callback(res);
      }
      else
      {
        console.log("error buscando a uno en la tabla: "+tabla+"-",error);
      }
    });
  }

  this.buscar =(filtro,callback)=>
  {
    PublicacionesOD.find((error,res)=>
    {
      if(!error)
      {
        const buscar=require("./Buscador.js");
        res=buscar(res,filtro);
        callback(res);
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
