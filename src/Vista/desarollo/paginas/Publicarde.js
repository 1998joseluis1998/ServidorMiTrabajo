import React, { Component } from "react";
import { render } from "react-DOM"
import Boton from "../componentes/Boton.js";
import Linea from "../componentes/Linea.js";
import H1 from "../componentes/H1.js";
import {Form,Button,Modal,Col,Table} from 'react-bootstrap';
import Cabecera from "./Cabecera.js";
import Piedepag from "./Piedepag.js";

class Publicarde  extends Component
{
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false,
    };
  }
  handleClose() {
    this.setState({ show: false });
  }
  handleShow() {
    this.setState({ show: true });
  }
  render()
  {
    return (      
        <div>    
        <Cabecera></Cabecera>
        <Form  action="/Publicardemanda"method="POST">
        <div className="Contenidod">
      <H1 contenido="Publicar Demanda"></H1>      
      <Linea></Linea>
      <br></br><br></br>
      <div className="Contenido2">
      <Form.Row>                
      <Form.Group as={Col} >
          <Form.Label bsPrefix="labelReact">Tipo de Publicación</Form.Label>
          <Form.Control name="tipo" className="cajones1" as="select">
            <option value="">Seleccionar Tipo de Publicación</option> 
            <option>Publicación Estandar</option>
            <option>Publicación Destacada</option>
            <option>Publicación Premium</option>                        
          </Form.Control>       
          
      </Form.Group>      
      
      <Button className="caja"variant="secondary" onClick={this.handleShow}>Ver</Button>
      <Form.Group>
      

      <Modal size="lg" show={this.state.show} onHide={this.handleClose} centered>          
        <Form action="/Publicardemanda" method="post">
            <Modal.Header  loseButton> 
            Publique Su Anuncio             
            </Modal.Header>
            <Modal.Body>
            <Table responsive>
              <thead>
              <tr>               
                <th> Descripción </th>
                <th> Estandar </th>
                <th> Destacado </th>
                <th> Premium </th>
              </tr>
              </thead>
              <tbody>
              <tr>               
                <td> Precio por anuncio </td>
                <td> Bs. 100 </td>
                <td> Bs. 150 </td>
                <td> Bs. 200 </td>
              </tr>
              <tr>                
                <td> Visibilidad </td>
                <td> Media </td>
                <td> Alta </td>
                <td> Muy Alta </td>
              </tr>
              <tr>                
                <td> Disponible </td>
                <td> 30 Días </td>
                <td> 60 Días </td>
                <td> 90 Días </td>
              </tr>
              <tr>                
                <td> Prioridad </td>
                <td> - </td>
                <td> 5 Días </td>
                <td> 10 Días </td>
              </tr>              
              </tbody>
          </Table>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={this.handleClose}>Close</Button>              
            </Modal.Footer>  
            </Form>
            
        </Modal>

      </Form.Group>
      <Form.Group as={Col} >
          <Form.Label bsPrefix="labelReact">Categoría</Form.Label>
          <Form.Control name="categoria" className="cajones" as="select">
            <option>Seleccionar Categoría</option> 
            <option>Medicina</option>
            <option>Tecnología</option>            
          </Form.Control>
      </Form.Group>        
      </Form.Row> 
      </div>

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
      <Form.Control name="ciudad" className="cajones" as="select">
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
          <Form.Label bsPrefix="labelReact">Horario de Trabajo</Form.Label>
          <Form.Control name="horario"className="cajones" as="select">
            <option>Seleccionar Horario de Trabajo</option>
            <option>Mañana</option>
            <option>Tarde</option>
            <option>Noche</option>
        </Form.Control>
        </Form.Group>              
        <Form.Group as={Col} >
          <Form.Label bsPrefix="labelReact">Sueldo </Form.Label>
          <Form.Control name="sueldo" className="cajones" placeholder="Sueldo"></Form.Control>
      </Form.Group>
      </Form.Row>

      <Form.Group as={Col} >
          <Form.Label bsPrefix="labelReact">Moneda de Pago</Form.Label>
          <Form.Control name="moneda" className="cajones"  as="select">
        <option>Seleccionar Moneda de Pago</option>
        <option>Boliviano</option>
        <option>Dolar</option>
        <option>Euro</option>
      </Form.Control>
        </Form.Group>              
        
      <Form.Group as={Col} controlId="exampleForm.ControlTextarea1">
         <Form.Label bsPrefix="labelReact">Descripción del Trabajo</Form.Label>
            <Form.Control name="descripcion"className="cajones" as="textarea" rows="6" />
      </Form.Group>    

      <Boton contenido="PUBLICAR DEMANDA"></Boton>

      </div>

      </Form>
      <Piedepag></Piedepag>
      </div>
    )
  }
}
export default Publicarde;