import React, { Component } from "react";
import { render } from "react-DOM"
import Boton from "../componentes/Boton.js";
import H1 from "../componentes/H1.js";
import {Card,Form,Button,Col} from 'react-bootstrap';
import Cabecera from "./Cabecera.js";
import Piedepag from "./Piedepag.js";

class Buscardem extends Component
{
   
  render()
  {
    var cartas = (<div></div>)
    if(window.datos!=undefined)
    {
      cartas = window.datos.map(dato => 
      {        
          return (            
            <div>
              
              <Card style={{ width: '18rem' }}>        
              <Card.Body>
              <Card.Title>Oferta</Card.Title>        
              </Card.Body>
              <Card.Text>
            <h2>
              Tipo Publicación : 
            </h2> {dato.Tipo_publicacion}<br></br>
            <h2>
              Categoria :
            </h2> {dato.Categoria}<br></br>
            <h2>
              Pais : 
            </h2> {dato.Pais}<br></br>
            <h2>
              Ciudad : 
            </h2> {dato.Ciudad}<br></br>
            <h2>
              Sueldo : 
            </h2> {dato.Demanda.Sueldo}<br></br>
            <h2>
              Horario : 
            </h2> {dato.Demanda.Horario}<br></br>
            
          </Card.Text>                
          </Card>
            </div>
          )

      })
    }
    
    return (

      <div> 
        <Cabecera></Cabecera>
      <H1 contenido="Buscar Demanda"></H1>
      <Form action="/Buscardemanda" method="POST">      
      <Form.Group as={Col} >
          <Form.Label bsPrefix="labelReact">Tipo de Publicación</Form.Label>
          <Form.Control name="tipo" className="form-control" as="select">
            <option value="">Seleccionar Tipo de Publicación</option> 
            <option>Publicación Estandar</option>
            <option>Publicación Destacada</option>
            <option>Publicación Premium</option>                        
      </Form.Control>
      </Form.Group> 

      <Form.Group >
          <Form.Label bsPrefix="labelReact">Categoría</Form.Label>
          <Form.Control name="categoria" className="form-control"as="select">
            <option value="">Seleccionar Categoría</option> 
            <option>Medicina</option>
            <option>Tecnología</option>            
      </Form.Control>
      </Form.Group>
                     
      <Form.Group >
      <Form.Label bsPrefix="labelReact">Ciudad</Form.Label>
      <Form.Control name="ciudad" className="form-control" as="select">
        <option value="">Seleccionar Ciudad</option>
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
      
      <Form.Group >
      <Form.Label bsPrefix="labelReact">País</Form.Label>
      <Form.Control name="pais" className="form-control" as="select">
        <option value="">Seleccionar País</option>
        <option>Bolivia</option>
        <option>Otro País</option>
      </Form.Control>
      </Form.Group>
          
      <Form.Group >
      <Form.Label bsPrefix="labelReact">Moneda</Form.Label>
      <Form.Control name="moneda" className="form-control" as="select">
        <option value="">Seleccionar Moneda de Pago</option>
        <option>Boliviano</option>
        <option>Dolar</option>
        <option>Euro</option>
      </Form.Control>
      </Form.Group>         
      
      <Form.Group >
          <Form.Label bsPrefix="labelReact">Horario de Trabajo</Form.Label>
          <Form.Control name="horario" className="form-control" as="select">
            <option value="">Seleccionar Horario de Trabajo</option>
            <option>Mañana</option>
            <option>Tarde</option>
            <option>Noche</option>
        </Form.Control>
        </Form.Group> 
    
      <Form.Row>
      <Form.Group as={Col} >
          <Form.Label bsPrefix="labelReact">Sueldo Min</Form.Label>
          <Form.Control className="form-control" type="number" min="0" name="sueldomin"placeholder="Sueldo Min"/>
          </Form.Group>      
          <Form.Group as={Col} >
          <Form.Label bsPrefix="labelReact">Sueldo Max</Form.Label>
          <Form.Control className="form-control" type="number" min ="0" name="sueldomax"placeholder="Sueldo Max"/>
          </Form.Group>      
      </Form.Row>

      <Boton type="submit" contenido="BUSCAR"></Boton>

      

      </Form>

      <div >
        {
          cartas
        }
      </div>
        <Piedepag></Piedepag>
      </div>

    )
  }
}
export default Buscardem;