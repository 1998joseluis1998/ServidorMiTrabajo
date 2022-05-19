var PublicacionD = (rutas, bd) => {
  rutas.post('/Publicardemanda', (req, res) => {
    var publicacion = {
      Fecha_inicio: req.body.fechaini,
      Fecha_fin: req.body.fechafin,
      Tipo_publicacion: req.body.tipo,
      Categoria: req.body.categoria,
      Pais: req.body.pais,
      Ciudad: req.body.ciudad,
      Moneda: req.body.moneda,
      Descripcion: req.body.descripcion,
      Demanda: {
        Horario: req.body.horario,
        Sueldo: req.body.sueldo,
      }
    };

    bd.cruds.crudPublicaciones.ingresar(publicacion, (r) => {
      console.log("Publicacion de demanda ingresada correctamente", JSON.stringify(r));
      res.redirect('/VerDemanda/' + r._id)
    });
  });

  rutas.post('/Buscardemanda', (req, res) => {
    var publicacion = {
      Oferta:
      {
        valor: undefined,
        tipo: 'igual'
      },
      Tipo_publicacion:
      {
        valor: req.body.tipo,
        tipo: 'contieneString'
      },
      Categoria:
      {
        valor: req.body.categoria,
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
      Demanda: {
        Horario:
        {
          valor: req.body.horario,
          tipo: 'contieneString'
        },
        Sueldo:
        {
          min:parseInt(req.body.sueldomin,10),
          max:parseInt(req.body.sueldomax,10),          
          tipo:"rango"
        }
      }
    }
    console.log(publicacion)

    bd.cruds.crudPublicaciones.buscar(publicacion, (r) => {
      r = r.filter(re => re.Demanda != undefined)
      r=r.filter(re=>re.Demanda.Horario.includes(req.body.horario));
      r=r.filter(re=>re.Demanda.Sueldo>req.body.sueldomin && re.Demanda.Sueldo<req.body.sueldomax);
      console.log("Publicacion de demanda ingresada correctamente", (r));
      res.render("Páginas/Buscardemanda",{datos:r})
    });
  });



}

module.exports = PublicacionD;