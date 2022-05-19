import React, { Component } from "react";
import { render } from "react-DOM"
import Linea from "../componentes/Linea.js";
import Boton from "../componentes/Boton.js";
import H1 from "../componentes/H1.js";
import {Form,Button,Col} from 'react-bootstrap';
import Cabecera from "./Cabecera.js";
import Piedepag from "./Piedepag.js";

class Publicarof  extends Component
{

  render()
  {
    return (
      <div>
        <Cabecera></Cabecera>
      <Form  action="/Publicaroferta" method="POST">
      <div className="Contenidoo">
      <H1 contenido="Publicar Oferta"></H1>
      <Linea></Linea>
      <br></br>
      <div className="Contenidoo1">
      <Form.Row>        
      <Form.Group as={Col} >
          <Form.Label bsPrefix="labelReact">Tipo de Publicación</Form.Label>
          <Form.Control name="tipo"className="cajones" as="select">
            <option>Seleccionar Tipo de Publicación</option> 
            <option>Publicación Estandar</option>
            <option>Publicación Destacada</option>
            <option>Publicación Premium</option>                        
      </Form.Control>
      </Form.Group>        
      <Form.Group as={Col} >
          <Form.Label bsPrefix="labelReact">Categoría</Form.Label>
          <Form.Control categoria="categoria" className="cajones"as="select">
            <option>Seleccionar Categoría</option> 
            <option>Medicina</option>
            <option>Tecnología</option>            
      </Form.Control>
      </Form.Group>
      </Form.Row>

      <Form.Row>        
      <Form.Group as={Col} controlId="formGridState">
      <Form.Label bsPrefix="labelReact">País</Form.Label>
      <Form.Control name="pais" className="cajones" as="select">
        <option>Seleccionar País</option>
        <option>Bolivia</option>
        <option>Otro País</option>
      </Form.Control>
      </Form.Group>          
      <Form.Group as={Col} controlId="formGridState">
      <Form.Label bsPrefix="labelReact">Ciudad</Form.Label>
      <Form.Control name="ciudad" className="cajones"as="select">
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
          <Form.Label bsPrefix="labelReact">Pretención Salarial MIN</Form.Label>
          <Form.Control name="salariomin" className="cajones" placeholder="Pretención Salarial MIN"></Form.Control>
        </Form.Group>              
        <Form.Group as={Col} >
          <Form.Label bsPrefix="labelReact">Pretención Salarial MAX</Form.Label>
          <Form.Control name="salariomax" className="cajones" placeholder="Pretención Salarial MAX"></Form.Control>
      </Form.Group>
      </Form.Row>

      <Form.Row>        
      <Form.Group as={Col} >
          <Form.Label bsPrefix="labelReact">Moneda de Pago</Form.Label>
          <Form.Control name="moneda" className="cajones" as="select">
        <option>Seleccionar Moneda de Pago</option>
        <option>Boliviano</option>
        <option>Dolar</option>
        <option>Euro</option>
      </Form.Control>
        </Form.Group>              
        <Form.Group as={Col} controlId="formGridState">
      <Form.Label bsPrefix="labelReact">Rubro</Form.Label>
      <Form.Control name="rubro" className="cajones" as="select">
        <option value="">Seleccionar Rubro</option>
        <option>Carpintero</option>
        <option>otro</option>
      </Form.Control>
      </Form.Group>
      </Form.Row>
      <Form.Group as={Col} controlId="exampleForm.ControlTextarea1">
         <Form.Label bsPrefix="labelReact">Descripción del Trabajo</Form.Label>
            <Form.Control name="descripcion" className="cajones" as="textarea" rows="6" />
      </Form.Group>    

      <Boton type="submit" contenido="PUBLICAR OFERTA"></Boton>
      
      </div>
      </div>
      </Form>      

      <Piedepag></Piedepag>
      </div>
    )
  }
}
export default Publicarof;
