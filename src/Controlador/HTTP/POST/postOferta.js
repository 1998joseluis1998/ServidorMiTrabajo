var PublicacionO=(rutas,bd)=>
{  
  rutas.post('/Publicaroferta',(req,res)=>
  {
    var publicacion={
      Fecha_inicio:req.body.fechaini,
      Fecha_fin:req.body.fechafin,  
      Tipo_publicacion:req.body.tipo,
      Categoria:req.body.categoria,
      Pais:req.body.pais,
      Ciudad:req.body.ciudad,    
      Moneda:req.body.moneda,
      Descripcion:req.body.descripcion,
      Oferta:{
        Horario:req.body.horario,
        Pretencion_salarial_min:req.body.salariomin,
        Pretencion_salarial_max:req.body.salariomax,
        Rubro_trabajo:req.body.rubro
      }
      };
  

    bd.cruds.crudPublicaciones.ingresar(publicacion,(r)=>{
      console.log("Publicacion de oferta ingresada correctamente",JSON.stringify(r));
      res.redirect('/VerOferta/'+r._id)
    });
  });

  rutas.post('/Buscaroferta', (req, res) => {

    var publicacion = {
      Demanda:
      {
        valor: undefined,
        tipo: 'igual'
      },
      Tipo_publicacion:
      {
        valor: req.body.tipo,
        tipo: 'contieneString'
      },
      Pais:
      {
        valor: req.body.pais,
        tipo: 'contieneString'
      },
      Ciudad:
      {
        valor: req.body.ciudad,
        tipo: 'contieneString'
      },
      Moneda:
      {
        valor: req.body.moneda,
        tipo: 'contieneString'
      },
      Oferta: {
        Rubro_trabajo:
        {
          valor: req.body.rubro,
          tipo: 'igual'
        },
        Pretencion_salarial_max:
        {
          sueldo:parseInt(req.body.sueldo,10),                    
          tipo:"rango"
        },
        Pretencion_salarial_min:
        {
          sueldo:parseInt(req.body.sueldo,10),                    
          tipo:"rango"
        }
      }
    }
    console.log(publicacion)

    bd.cruds.crudPublicaciones.buscar(publicacion, (r) => {
      r = r.filter(re => re.Oferta != undefined)
      r=r.filter(re=>re.Oferta.Rubro_trabajo.includes(req.body.rubro));
      r=r.filter(re=>re.Oferta.Pretencion_salarial_min<req.body.sueldo && re.Oferta.Pretencion_salarial_max>req.body.sueldo);
      
      console.log("Publicacion de oferta buscada correctamente", (r));
      res.render("Páginas/Buscaroferta",{datos:r})
    });
  });







}

module.exports=PublicacionO;
