import React, { Component } from "react";
import { render } from "react-DOM"
import Boton from "../componentes/Boton.js";
import H1 from "../componentes/H1.js";
import {Form,Button,Col} from 'react-bootstrap';
import Cabecera from "./Cabecera.js";
import Piedepag from "./Piedepag.js";

class Buscarc extends Component
{

  render()
  {
    return (
      <div> 
      <Cabecera></Cabecera>        
      <H1 contenido="Buscar Curriculum Vitae"></H1>
      <Form action="/Buscarcv" method="POST">      
      <Form.Group as={Col} >
          <Form.Label bsPrefix="labelReact">Tipo de Publicación</Form.Label>
          <Form.Control name="tipo" className="form-control" as="select">
            <option>Seleccionar Tipo de Publicación</option> 
            <option>Publicación Estandar</option>
            <option>Publicación Destacada</option>
            <option>Publicación Premium</option>                        
      </Form.Control>
      </Form.Group> 

      <Form.Group >
          <Form.Label bsPrefix="labelReact">Categoría</Form.Label>
          <Form.Control name="categoria" className="form-control"as="select">
            <option>Seleccionar Categoría</option> 
            <option>Medicina</option>
            <option>Tecnología</option>            
      </Form.Control>
      </Form.Group>
                     
      <Form.Group >
      <Form.Label bsPrefix="labelReact">Ciudad</Form.Label>
      <Form.Control name="ciudad" className="form-control" as="select">
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
      
      <Form.Group as={Col} controlId="formGridState">
      <Form.Label bsPrefix="labelReact">País</Form.Label>
      <Form.Control name="pais" className="form-control" as="select">
        <option>Seleccionar País</option>
        <option>Bolivia</option>
        <option>Otro País</option>
      </Form.Control>
      </Form.Group>

      <Form.Row>
        <Form.Group as={Col} >
          <Form.Label bsPrefix="labelReact">Moneda</Form.Label>
          <Form.Control name="moneda" className="form-control" as="select">
        <option>Seleccionar Moneda de Pago</option>
        <option>Boliviano</option>
        <option>Dolar</option>
        <option>Euro</option>
        </Form.Control>
        </Form.Group>

        <Form.Group as={Col} >
          <Form.Label bsPrefix="labelReact">Sueldo</Form.Label>
          <Form.Control className="form-control" type="number" name="sueldo"placeholder="Sueldo"/>
        </Form.Group>
      </Form.Row>

      <Form.Group as={Col} controlId="formGridState">
      <Form.Label bsPrefix="labelReact">Rubro</Form.Label>
      <Form.Control name="Rubro" className="form-control" as="select">
        <option>Seleccionar País</option>
        <option>Bolivia</option>
        <option>Otro País</option>
      </Form.Control>
      </Form.Group>

      <Boton type="submit" contenido="BUSCAR"></Boton>

      </Form>

      <Piedepag></Piedepag>
      </div>
    )
  }
}
export default Buscarc;