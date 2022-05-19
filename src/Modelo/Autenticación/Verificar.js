module.exports = new obj();
function obj()
{
  this.verificar = (req, res, next)=>{
    if(req.isAuthenticated())
    {
        return next();
    }
    else
    {
      req.flash("error","primero es necesario iniciar sesion");    
      res.redirect('/IniciarSesion');
    }
  }
}
