import React, { Component } from "react";
import { render } from "react-DOM"
import Boton from "../componentes/Boton.js";
import H1 from "../componentes/H1.js";
import {Form,Button,Col} from 'react-bootstrap';
import Linea from "../componentes/Linea.js";
import Cabecera from "./Cabecera.js";
import Piedepag from "./Piedepag.js";

class Crearcuentaemp  extends Component
{

  render()
  {
    return (
      <div> 
        <Cabecera></Cabecera>
        <br></br><br></br>
        <Form action="/Crearempresa" method="POST">
          <div className="Contenidoe">
        <H1 contenido="Crear Cuenta Empresa"></H1>  
        <Linea></Linea>
        <br></br><br></br>
      <Form.Row>        
      <Form.Group as={Col} >
          <Form.Label bsPrefix="labelReact">Nit de Empresa</Form.Label>
          <Form.Control  className="cajones" type="text" name="nit" placeholder="Nit de Empresa"/>
        </Form.Group>
        <Form.Group as={Col} >
          <Form.Label bsPrefix="labelReact">Ingrese Imagen de Empresa</Form.Label>
          <Form.Control  className="cajones" type="text" name="foto"placeholder="Imagen de Empresa" />
        </Form.Group>
      </Form.Row>

      <Form.Row>        
      <Form.Group as={Col} >
          <Form.Label bsPrefix="labelReact">Nombre de Empresa</Form.Label>
          <Form.Control  className="cajones" type="text" name="nombre" placeholder="Nombre de Empresa"/>
        </Form.Group>
        <Form.Group as={Col} >
          <Form.Label bsPrefix="labelReact">Nombre de Persona Responsable</Form.Label>
          <Form.Control  className="cajones" type="text" name="responsable"placeholder="Nombre de Persona Responsable" />
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
        <option>Seleccionar Ciudad</option>
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
          <Form.Control className="cajones" type="email" name="correo" placeholder="Correo Electrónico" required />
        </Form.Group>

        <Form.Group as={Col} >
          <Form.Label bsPrefix="labelReact">Contraseña</Form.Label>
          <Form.Control className="cajones" type="password" name="contraseña"placeholder="Contraseña"/>
        </Form.Group>
      </Form.Row>
      <Boton type="submit" contenido="CREAR CUENTA"></Boton>
      </div>
      </Form>
      <Piedepag></Piedepag>
      </div>
    )
  }
}
export default Crearcuentaemp;