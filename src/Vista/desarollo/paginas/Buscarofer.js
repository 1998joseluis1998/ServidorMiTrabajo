import React, { Component } from "react";
import { render } from "react-DOM"
import Boton from "../componentes/Boton.js";
import H1 from "../componentes/H1.js";
import Linea from "../componentes/Linea.js";
import {Form,Button,Col,Card} from 'react-bootstrap';
import Cabecera from "./Cabecera.js";
import Piedepag from "./Piedepag.js";


class Buscarofer extends Component
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
              Sueldo Min : 
            </h2> {dato.Oferta.Pretencion_salarial_min}<br></br>
            <h2>
              Sueldo Max : 
            </h2> {dato.Oferta.Pretencion_salarial_max}<br></br>
            <h2>
              Rubro : 
            </h2> {dato.Oferta.Rubro}<br></br>
            
          </Card.Text>                
          </Card>
            </div>
          )

      })
    }
    
    return (      
      <div>
      <Cabecera></Cabecera>
      <H1 contenido="Buscar Oferta"></H1>
      <Form action="/Buscaroferta" method="POST">      
      <div className="Contenidobo"> 
      <br></br>
      <Linea></Linea>
     <div className="Contenidobo-izquierda">
     <Form.Group as={Col} >
          <Form.Label bsPrefix="labelReact">Tipo de Publicación</Form.Label>
          <Form.Control name="tipo" className="cajones" as="select">
            <option value="">Seleccionar Tipo de Publicación</option> 
            <option>Publicación Estandar</option>
            <option>Publicación Destacada</option>
            <option>Publicación Premium</option>                        
      </Form.Control>
      </Form.Group> 

      <Form.Group >
          <Form.Label bsPrefix="labelReact">Categoría</Form.Label>
          <Form.Control name="categoria" className="cajones"as="select">
            <option value="">Seleccionar Categoría</option> 
            <option>Medicina</option>
            <option>Tecnología</option>            
      </Form.Control>
      </Form.Group>
                     
      <Form.Group >
      <Form.Label bsPrefix="labelReact">Ciudad</Form.Label>
      <Form.Control name="ciudad" className="cajones" as="select">
        <option value="">Seleccionar Ciudad</option>
        <option  >Cochabamba</option>
        <option  >Oruro</option>
        <option  >Chuquisaca</option>
        <option  >La Paz</option>
        <option  >Tarija</option>
        <option  >Pando</option>
        <option  >Beni</option>
        <option  >Potosi</option>
        <option  >Santa Cruz</option>
      </Form.Control>
      </Form.Group>
      
      <Form.Group as={Col} controlId="formGridState">
      <Form.Label bsPrefix="labelReact">País</Form.Label>
      <Form.Control name="pais" className="cajones" as="select">
        <option value="">Seleccionar País</option>
        <option>Bolivia</option>
        <option>Otro País</option>
      </Form.Control>
      </Form.Group>

      <Form.Row>
        <Form.Group as={Col} >
          <Form.Label bsPrefix="labelReact">Moneda</Form.Label>
          <Form.Control name="moneda" className="cajones" as="select">
        <option value="">Seleccionar Moneda de Pago</option>
        <option>Boliviano</option>
        <option>Dolar</option>
        <option>Euro</option>
        </Form.Control>
        </Form.Group>

        <Form.Group as={Col} >
          <Form.Label bsPrefix="labelReact">Sueldo</Form.Label>
          <Form.Control className="cajones" type="number" name="sueldo"placeholder="Sueldo"/>
        </Form.Group>
      </Form.Row>

      <Form.Group as={Col} controlId="formGridState">
      <Form.Label bsPrefix="labelReact">Rubro</Form.Label>
      <Form.Control name="rubro" className="cajones" as="select">
        <option value="">Seleccionar Rubro</option>
        <option>Carpintero</option>
        <option>otro</option>
      </Form.Control>
      </Form.Group>

      <Boton type="submit" contenido="BUSCAR"></Boton>

     </div>
     <div className="Contenidobo-derecha">

     <img src=""></img>
     <p>Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum</p>

     <img src=""></img>
     <p>Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum</p>

     </div>
      

      
      </div>
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
export default Buscarofer;