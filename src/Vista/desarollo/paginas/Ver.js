import React, { Component } from "react";
import { render } from "react-DOM"
import Linea from "../componentes/Linea.js";
import Boton from "../componentes/Boton.js";
import H1 from "../componentes/H1.js";
import { Form, Button, Col } from 'react-bootstrap';
import Piedepag from "../paginas/Piedepag.js";
import Cabecera from "./Cabecera.js";

const estilos = {
  width: "100%",
  heigth: "100vh"
}
class Ver extends Component {

  render() {
    return (
      <div style={estilos}>
        <Cabecera></Cabecera>
        <Form className="form" action="/Ver" method="POST">
          <div className="Contenido">
            <H1 contenido="Ver Curriculum"></H1>
            <br></br>
            <Linea></Linea>
            <div className="Contenido-izquierda">
              <img src=""></img>

            </div>
            <div className="Contenido-derecha">
              <h1>Jose Luis Rodriguez</h1>
              <p>Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum
            </p>
            </div>
            <br></br>
            <div className="Contenido-izquierda2">
              <h1>Jose Luis Rodriguez</h1>
              <p>Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum
            </p>
            </div>
            <div className="Contenido-derecha2">
              <h1>Jose Luis Rodriguez</h1>
              <p>Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum
            </p>
            </div>
            <div className="Contenido-izquierda2">
              <h1>Jose Luis Rodriguez</h1>
              <p>Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum
            </p>
            </div>
            <div className="Contenido-derecha2">
              <h1>Jose Luis Rodriguez</h1>
              <p>Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum
            </p>
            </div>
            <div className="footer">
              <div className="footer_redes_sociales">
                <h4>
                  <a href="#"></a>&nbsp;
              <a href="#"></a>&nbsp;
              <a href="#"></a>&nbsp;
              <a href="#"></a>
                </h4>
              </div>
              <div className="footer_copyright">
                <h5>Contactos</h5>
              </div>
            </div>
            <br></br>
            <br></br>
          </div>
          
          
            <div className="Contenido-izquierda2">
             <Boton contenido="DESCARGAR"/>
            </div>
            <div className="Contenido-derecha2">
            <Boton contenido="ENVIAR SOLICITUD"/>
            </div>
        </Form>
        <Piedepag></Piedepag>

      </div>
    )
  }
}

globalThis
export default Ver;
