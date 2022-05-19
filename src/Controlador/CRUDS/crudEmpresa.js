module.exports =new crud();

function crud()
{
  const Empresa= require('./../../Modelo/BaseDatos/Esquemas/Empresa.js');
  var tabla= "Empresa";

  //Funciones
  this.ingresar =(datos,callback)=>
  {
    var empresa=new Empresa(datos);
    empresa.save((error,res)=>
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

  this.modificar =(cod_empresa,datosnuevos,callback)=>
  {
    Empresa.update({"_id":cod_empresa},datosnuevos,(error,res)=>
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

  this.eliminar =(cod_empresa,callback)=>
  {
    Empresa.deleteone({"_id":cod_empresa},(error,res)=>
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

  this.buscar1 = (cod_empresa,callback)=>
  {
    Empresa.findOne({"_id":cod_empresa},(error,res)=>
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

  this.buscaremp =(filtro,callback)=>
  {
    Empresa.find((error,res)=>
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
  

  //cierra Funciones


}//cierra crud
