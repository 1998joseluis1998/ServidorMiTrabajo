var retorno= (passport)=>
{
  const express=require('express');
  var rutas= express.Router();

  var bd=require('./../../Modelo/BaseDatos/index.js');
  bd.iniciar();

//GET
  require('./GET/getCuenta.js')(rutas,bd);
  require('./GET/getCurriculum.js')(rutas,bd);
  require('./GET/getDemanda.js')(rutas,bd);
  require('./GET/getOferta.js')(rutas,bd);
  require('./GET/getEmpresa.js')(rutas,bd);
  require('./GET/getPersona.js')(rutas,bd);
  require('./GET/getInicio.js')(rutas,bd);
  require('./GET/getTitulo.js')(rutas,bd);  
  
//POST}

require('./POST/postCuenta.js')(rutas,passport,bd);
require('./POST/postCuentaemp.js')(rutas,passport,bd);
  require('./POST/postEmpresa.js')(rutas,bd);
  require('./POST/postPersona.js')(rutas,bd);
  require('./POST/postTitulo.js')(rutas,bd);
  require('./POST/postOferta.js')(rutas,bd);
  require('./POST/postDemanda.js')(rutas,bd);

  bd.cruds.crudPersona.buscarper(
    {/*
      Apellido_paterno:
      {
        valor:"rodriguez",
        tipo:"igual"
      },
      Apellido_materno:
      {
        valor:"per",
        tipo:"contieneString"
      },
      Nombre:
      {
        valor: null,
        tipo:'igual'
      }*/
      Ci: 
      {
        min: 100000,
        max: 150,
        tipo: 'rango'
      }
    },
    (datos)=>
    {
      console.log(datos);
    }
  )


  return rutas;

}

module.exports=retorno;
