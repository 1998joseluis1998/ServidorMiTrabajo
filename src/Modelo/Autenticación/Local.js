module.exports = (passport)=>
{
  var bcrypt = require('bcryptjs');

  var bd = require('./../BaseDatos/index.js');
  bd.iniciar();

    const LocalStrategy = require('passport-local').Strategy;

    passport.serializeUser((user,done)=>
    {
    //console.log("serializando usuario",user);
      done(null, user._id);
    });
    passport.deserializeUser((id, done) => {
      console.log('ingresando cuenta:',id);
      bd.cruds.crudPersona.buscar1(id,(usuario)=>
      {
      //  console.log(usuario[0]);
        if((usuario!=undefined))
        {
      //    console.log("desearializando",id,usuario);
          done(null, usuario);
        }
        else
        {
            bd.cruds.crudEmpresa.buscar1(id,(empresa)=>{
                if(empresa!=undefined)
                {
                    done(null,empresa);
                }
                else{
                    done(null,false);
                    console.log("no hay esta cuenta");
                }
            })
        }
      });
    });

    
//Registrar persona
    passport.use("Registrar-persona", new LocalStrategy({
      usernameField: 'correo',
      passwordField: 'contraseña',
      passReqToCallback: true
    },(req,correo,contra,done)=>
    {
      var bcrypt = require('bcryptjs');

      bd.cruds.crudPersona.buscarper({Correo_persona:{tipo: 'igual',valor: correo}},(res)=>
      {
        if(res.length>0)
        {
          return done(null, false, req.flash('error', 'El correo '+ correo + ' ya fue registrado'));
        }
        else
        {
          bd.cruds.crudEmpresa.buscaremp({Correo_empresa:{tipo: 'igual',valor: correo}},(res)=>
          {
            if(res.length>0)
            {
              return done(null, false, req.flash('error', 'El correo '+ correo + ' ya fue registrado'));
            }
            else
            {
              bcrypt.genSalt(10, function(err, salt) {
                bcrypt.hash(contra, salt, function(err, contraEncriptado) {
                  var datos = {
                    
                    Ci:req.body.ci,
                    Usuario:req.body.correo,
                    Nombres:req.body.nombre,           
                    Pais:req.body.pais,       
                    Ciudad:req.body.ciudad,       
                    Correo_persona:req.body.correo,
                    Contraseña:req.body.contraseña,
                  };
                  //console.log(datos)
                  bd.cruds.crudPersona.ingresar(datos,(res)=>
                  {
                    console.log(res)
                    return done(null, res);
                  });
                });
              });
            }
          });
        }
      });
    }));

//Registrar empresa
passport.use("Registrar-empresa", new LocalStrategy({
  usernameField: 'correo',
  passwordField: 'contraseña',
  passReqToCallback: true
},(req,correo,contra,done)=>
{
  var bcrypt = require('bcryptjs');

  bd.cruds.crudPersona.buscarper({Correo_persona:{tipo: 'igual',valor: correo}},(res)=>
  {
    if(res.length>0)
    {
      return done(null, false, req.flash('error', 'El correo '+ correo + ' ya fue registrado'));
    }
    else
    {
      bd.cruds.crudEmpresa.buscaremp({Correo_empresa:{tipo: 'igual',valor: correo}},(res)=>
      {
        if(res.length>0)
        {
          return done(null, false, req.flash('error', 'El correo '+ correo + ' ya fue registrado'));
        }
        else
        {
          bcrypt.genSalt(10, function(err, salt) {
            bcrypt.hash(contra, salt, function(err, contraEncriptado) {
              var datos = {
                
                Nit:req.body.nit,
                Foto_empresa:req.body.foto,
                Pais_empresa:req.body.pais,       
                Ciudad_empresa:req.body.ciudad, 
                Nombre_empresa:req.body.nombre,
                Nombre_responsable:req.body.responsable,
                Correo_empresa:req.body.correo,
                Contraseña:req.body.contraseña,      
              };
              bd.cruds.crudEmpresa.ingresar(datos,(res)=>
              {
                
                return done(null, res);
              });
            });
          });
        }
      });
    }
  });
}));



    //login
    passport.use('local-login', new LocalStrategy({
       usernameField : 'Correo',
       passwordField: 'contraseña',
       passReqToCallback: true
     }, (req, correo, contra, done)=> {
       bd.cruds.crudPersona.buscarper({Correo_persona:{valor:correo,tipo:"igual"}}, (usuario)=>{
        if(!(usuario.length>0)){
            bd.cruds.crudEmpresa.buscaremp({Corre_empresa:{valor:correo,tipo:"igual"}},(empresa)=>{
                if(!empresa.length>0){
                    return done(null,false,req.flash('error','Empresa no encontrado'));
                }
                else
                {
                    bcrypt.compare(contra,empresa[0].contra, function(err, resp) {
                        if(err) console.log(err);
                          if(resp==true)
                          {
                            req.session.usuario = empresa[0];
                            return done(null, empresa[0], req.flash("confirm","Bienvenido de nuevo"));
                          }
                          else
                          {
                            return done(null, false, req.flash('error', 'Contraseña incorrecta'));
                          }
                      });
                }
            })
        }
        else
        {

          bcrypt.compare(contra, usuario[0].contra, function(err, resp) {
            if(err) console.log(err);
              if(resp==true)
              {
                req.session.usuario = usuario[0];
                return done(null, usuario[0], req.flash("confirm","Bienvenido de nuevo"));
              }
              else
              {
                return done(null, false, req.flash('error', 'Contraseña incorrecta'));
              }
          });
        }
       });
      })
    );


}


