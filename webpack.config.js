var entrada = "./src/Vista/desarollo/Salidas/";
var salida = "/src/public";
module.exports =
{
  entry: {    
    "Inicio": entrada +"Inicio.js",
    "Piedepagina":entrada +"Piedepagina.js",
    "Cabecera":entrada+"Cabecera.js",
    "Crearcuentapersona": entrada +"Crearcuentapersona.js",
    "Crearcuentaempresa": entrada +"Crearcuentaempresa.js",
    "Publicaroferta": entrada + "Publicaroferta.js",
    "Publicardemanda": entrada + "Publicardemanda.js",
    "Buscaroferta":entrada+"Buscaroferta.js",
    "Buscardemanda":entrada+"Buscardemanda.js",
    "Buscarcv":entrada+"Buscarcv.js",
    "Ver":entrada+"Ver.js",
    "Micuentapersona":entrada+"Micuentapersona",
    "Micuentaempresa":entrada+"Micuentaempresa",
    "Iniciarsesion": entrada +"Iniciarsesion.js"
   // "dos": entrada + "dos.js",
   //"SuperGeneradorFormularios3000": entrada + "SuperFormGeneradorPortable.js"
  },
  output:
  {
    path: __dirname + salida,
    filename: '[name].js'
  },
  module:
  {
    rules:
    [
      {
        use: "babel-loader",
        test: /\.js$/,
        exclude: /node_modules/
        
      }, {
        test: /\.css$/,
        loaders: ["style-loader", "css-loader"]
      }
      , {
        test: /\.png$/,
        loaders: ["style-loader", "css-loader"]
      }
      , {
        test: /\.jfif$/,
        loaders: ["style-loader", "css-loader"]
      }
    ]
  }
}
