module.exports=new cruds();

function cruds()
{
  this.crudEmpresa;
  this.crudPersona;
  this.crudPublicaciones;

  this.iniciar=()=>
  {
    this.crudEmpresa=require('./crudEmpresa.js');
    this.crudPersona=require('./crudPersona.js');
    this.crudPublicaciones=require('./crudPublicaciones.js');
    this.crudTitulo=require('./crudTitulo.js');
  }

}
