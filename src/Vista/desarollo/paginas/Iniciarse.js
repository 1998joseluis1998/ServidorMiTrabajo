import React, { Component } from "react";
import { render } from "react-DOM"
import Boton from "../componentes/Boton.js";
import H1 from "../componentes/H1.js";
import Linea from "../componentes/Linea.js";
import { Form, Button, Col } from 'react-bootstrap';
import Cabecera from "./Cabecera.js";
import Piedepag from "./Piedepag.js";


class Iniciarse extends Component {

  render() {
    return (
      <div>
        <Cabecera></Cabecera>
        <Form>
          <div className="Contenidoi">
          <H1 contenido="Iniciar Sesión"></H1>
          <br></br>
            <Linea></Linea>
            <br></br>
            <img src=""></img>
            <div className="Contenido1">
            <Form.Group >
              <Form.Label className="labelReact">Correo Electrónico</Form.Label>              
              <Form.Control className="cajoni" type="email"/>
            </Form.Group>
            <Form.Group >
              <Form.Label className="labelReact">Contraseña</Form.Label>
              <Form.Control className="cajoni" type="password"/>
            </Form.Group>
            </div>
            <div className="Contenidoi-izquierda">
            <label>¿No tienes una cuenta Empresa?</label><a href="">Crear una cuenta</a>
            <br></br>
            <label>¿No tienes una cuenta Persona?</label><a href="">Crear una cuenta</a>
            </div>
            <div className="Contenidoi-derecha">
            <Boton contenido="INICIAR SESIÓN"></Boton>
            </div>
          </div>

        </Form>

        <Piedepag></Piedepag>
      </div>
    )
  }
}
export default Iniciarse;