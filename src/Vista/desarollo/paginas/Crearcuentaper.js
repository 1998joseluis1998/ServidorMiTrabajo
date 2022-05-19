import React, { Component } from "react";
import { render } from "react-DOM";
import Linea from"../componentes/Linea.js";
import Boton from "../componentes/Boton.js";
import H1 from "../componentes/H1.js";
import {Form,Button,Col} from 'react-bootstrap';
import Cabecera from "./Cabecera.js";
import Piedepag from "./Piedepag.js";

class Crearcuentaper  extends Component
{

  render()
  {
    return (
      <div> 
      <Cabecera></Cabecera>
      <Form action="/Crearpersona" method="POST">
        <div className="Contenidop">
      <H1 contenido="Crear Cuenta Persona"></H1>
      <Linea></Linea>
      <br></br><br></br>
      <Form.Row>        
      <Form.Group as={Col} >
          <Form.Label bsPrefix="labelReact">Carnet de Identidad</Form.Label>
          <Form.Control  className="cajones" type="text" name="ci"placeholder="Carnet de Identidad"/>
        </Form.Group>
        <Form.Group as={Col} >
          <Form.Label bsPrefix="labelReact">Nombres(s)</Form.Label>
          <Form.Control  className="cajones" type="text" name="nombre"placeholder="Nombres(s)" />
        </Form.Group>
      </Form.Row>
      
      <Form.Row>        
      <Form.Group as={Col} controlId="formGridState">
      <Form.Label bsPrefix="labelReact">País</Form.Label>
      <Form.Control name="pais" className="cajones"as="select">
        <option>Seleccionar País</option>
        <option>Bolivia</option>
        <option>Otro País</option>
      </Form.Control>
      </Form.Group>          
      <Form.Group as={Col} controlId="formGridState">
      <Form.Label bsPrefix="labelReact">Ciudad</Form.Label>
      <Form.Control name="ciudad"className="cajones"as="select">
        <option value="Seleccionar Ciudad">Seleccionar Ciudad</option>
        <option  value="Cochabamba">Cochabamba</option>
        <option  value="Oruro">Oruro</option>
        <option  value="Chuquisaca">Chuquisaca</option>
        <option  value="La Paz">La Paz</option>
        <option  value="Tarija">Tarija</option>
        <option  value="Pando">Pando</option>
        <option  value="Beni">Beni</option>
        <option  value="Potosi">Potosi</option>
        <option  value="Santa Cruz">Santa Cruz</option>
      </Form.Control>
      </Form.Group>
      </Form.Row>

      <Form.Row>
        <Form.Group as={Col} >
          <Form.Label bsPrefix="labelReact">Correo Electrónico</Form.Label>
          <Form.Control name="correo"className="cajones" type="email" placeholder="Correo Electrónico" />
        </Form.Group>

        <Form.Group as={Col} >
          <Form.Label bsPrefix="labelReact">Contraseña</Form.Label>
          <Form.Control name="contraseña"className="cajones" type="password" placeholder="Contraseña"/>
        </Form.Group>
      </Form.Row>

        <br></br>
      <Boton type="submit" contenido="CREAR CUENTA">Crear Cuenta</Boton>
      </div>
      </Form>
      
      <Piedepag></Piedepag>
      </div>
    )
  }
}
export default Crearcuentaper;
