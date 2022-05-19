module.exports =new crud();

function crud()
{
  const Persona=require('./../../Modelo/BaseDatos/Esquemas/Persona.js');
  var tabla="Persona";

  //Funciones
  this.ingresar =(datos,callback)=>
  {
    var persona=new Persona(datos);
    
    persona.save((error,res)=>
    {
      if(!error)
      {
        callback(res);
      }
      else
      {
        console.log("---------------"+datos);
        console.log("Error ingresando en la tabla: "+ tabla +" - ",error);
      }
    });
  }

  this.modificar =(ci,datosnuevos,callback)=>
  {
    Persona.update({"_id":ci},datosnuevos,(error,res)=>
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

  this.eliminar =(ci,callback)=>
  {
    Persona.deleteone({"_id":ci},(error,res)=>
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

  this.buscar1 = (ci,callback)=>
  {
    Persona.findOne({"_id":ci},(error,res)=>
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

  this.buscarper =(filtro,callback)=>
  {
    Persona.find((error,res)=>
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

  //Cierra crud
}
