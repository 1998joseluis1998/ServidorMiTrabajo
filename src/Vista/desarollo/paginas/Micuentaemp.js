import React, { Component } from "react";
import { render } from "react-DOM"
import Boton from "../componentes/Boton.js";
import H1 from "../componentes/H1.js";
import {Form,Accordion,Card,ListGroup,ListGroupItem,Col} from 'react-bootstrap';
import Cabecera from "./Cabecera.js";
import Piedepag from "./Piedepag.js";

class Micuentaemp  extends Component
{

  render()
  {
    return (
      
    <div> 
        <Cabecera></Cabecera>
    <Form action="/Micuentaempresa"method="POST">
    <H1 contenido="Mi Cuenta"></H1>
    <Accordion defaultActiveKey="0">
            <Accordion.Toggle as={Card.Header} eventKey="1">
            <H1 contenido="Mi Perfil"></H1>
            </Accordion.Toggle>
            <div id="contenido">
            <Accordion.Collapse eventKey="1">                                    
            <Form.Row>        
                <Form.Group as={Col} >
                    <Form.Label bsPrefix="labelReact">Nit de Empresa</Form.Label>
                    <Form.Control  bsPrefix="cajaReact" type="text" name="nit" placeholder="Nit de Empresa"/>
                    </Form.Group>
                    <Form.Group as={Col} >
                    <Form.Label bsPrefix="labelReact">Ingrese Imagen de Empresa</Form.Label>
                    <Form.Control  bsPrefix="cajaReact" type="text" name="foto"placeholder="Imagen de Empresa" />
                </Form.Group>
            </Form.Row>
            </Accordion.Collapse>
            <Accordion.Collapse eventKey="1">   
            <Form.Row>        
                <Form.Group as={Col} >
                    <Form.Label bsPrefix="labelReact">Nombre de Empresa</Form.Label>
                    <Form.Control  bsPrefix="cajaReact" type="text" name="nombre" placeholder="Nombre de Empresa"/>
                    </Form.Group>
                    <Form.Group as={Col} >
                    <Form.Label bsPrefix="labelReact">Nombre de Persona Responsable</Form.Label>
                    <Form.Control  bsPrefix="cajaReact" type="text" name="responsable"placeholder="Nombre de Persona Responsable" />
                </Form.Group>
            </Form.Row>
            </Accordion.Collapse>
            <Accordion.Collapse eventKey="1">
            <Form.Row>        
                <Form.Group as={Col} >
                    <Form.Label bsPrefix="labelReact">Pa??s</Form.Label>
                    <Form.Control name="pais" bsPrefix="cajaReact"as="select">
                        <option value="">Seleccionar Pa??s</option>
                        <option>Bolivia</option>
                        <option>Otro Pa??s</option>
                    </Form.Control>
                    </Form.Group>          
                    <Form.Group as={Col} >
                    <Form.Label bsPrefix="labelReact">Ciudad</Form.Label>
                    <Form.Control name="ciudad"bsPrefix="cajaReact"as="select">
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
            </Form.Row>
            </Accordion.Collapse>
            <Accordion.Collapse eventKey="1"> 
                <Form.Row>
                    <Form.Group as={Col} >
                    <Form.Label bsPrefix="labelReact">Correo Electr??nico</Form.Label>
                    <Form.Control bsPrefix="cajaReact" type="email" name="correo"placeholder="Correo Electr??nico" />
                    </Form.Group>
                    <Form.Group as={Col} >
                    <Form.Label bsPrefix="labelReact">Contrase??a</Form.Label>
                    <Form.Control bsPrefix="cajaReact" type="password" name="contrase??a"placeholder="Contrase??a"/>
                    </Form.Group>
                </Form.Row>
            </Accordion.Collapse>
            <Accordion.Collapse eventKey="1"> 
            <Form.Row>
                    <Form.Group as={Col} >
                    <Form.Label bsPrefix="labelReact">Sitio Web</Form.Label>
                    <Form.Control bsPrefix="cajaReact" type="url" name="sitio"placeholder="Sitio Web" />
                    </Form.Group>
                    <Form.Group as={Col} >
                    <Form.Label bsPrefix="labelReact">Direcci??n</Form.Label>
                    <Form.Control bsPrefix="cajaReact" type="text" name="contrase??a"placeholder="Direcci??n"/>
                    </Form.Group>
                </Form.Row>
            </Accordion.Collapse>
            <Accordion.Collapse eventKey="1"> 
            <Form.Row>
                    <Form.Group as={Col} >
                    <Form.Label bsPrefix="labelReact">Tel??fono</Form.Label>
                    <Form.Control bsPrefix="cajaReact" type="tel" name="telefono"placeholder="Tel??fono" />
                    </Form.Group>
                    <Form.Group as={Col} >
                    <Form.Label bsPrefix="labelReact">Facebook</Form.Label>
                    <Form.Control bsPrefix="cajaReact" type="text" name="facebook" placeholder="Facebook"/>
                    </Form.Group>
                </Form.Row>
            </Accordion.Collapse>      
            <Accordion.Collapse eventKey="1"> 
                    <Form.Group >
                    <Form.Label bsPrefix="labelReact">Descripci??n de Empresa</Form.Label>
                    <Form.Control name="descripcion"bsPrefix="cajaReact"as="textarea" rows="6" />
                    </Form.Group>
            </Accordion.Collapse>      
            <Accordion.Collapse eventKey="1"> 
                    <Boton contenido="GUARDAR"></Boton>
            </Accordion.Collapse>
            </div>
            </Accordion>

            <Accordion defaultActiveKey="0">
            <Accordion.Toggle as={Card.Header} eventKey="1">
            <H1 contenido="Mis Publicaciones"></H1> 
            </Accordion.Toggle>
            <div id="contenido">
            <Accordion.Collapse eventKey="1">   
            <Form>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
                <Card.Body>
                  <Card.Title>Demanda</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                </Card.Text>
                </Card.Body>
                    <Form.Group as={Col} >
                    <Form.Label bsPrefix="labelReact">Breve Descripci??n: </Form.Label>
                    <Form.Label bsPrefix="labelReact"> "vacio"</Form.Label>
                    </Form.Group>
                <Card.Body>                  
                  <Card.Link bsPrefix="cajaReact" href="#">Ver m??s informaci??n</Card.Link>
                </Card.Body>
              </Card>
              </Form>                                 
            </Accordion.Collapse>
          
            <Accordion.Collapse eventKey="1"> 
                  <Boton contenido="GUARDAR"></Boton>
            </Accordion.Collapse>
            </div>
            </Accordion>

        <Accordion defaultActiveKey="0">
            <Accordion.Toggle as={Card.Header} eventKey="1">
            <H1 contenido="Mis Solicitudes"></H1> 
            </Accordion.Toggle>
            <div id="contenido">
            <Accordion.Collapse eventKey="1">   
            <Form>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
                <Card.Body>
                  <Card.Title>Demanda</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                </Card.Text>
                </Card.Body>
                    <Form.Group as={Col} >
                    <Form.Label bsPrefix="labelReact">Breve Descripci??n: </Form.Label>
                    <Form.Label bsPrefix="labelReact"> "vacio"</Form.Label>
                    </Form.Group>
                <Card.Body>                  
                  <Card.Link bsPrefix="cajaReact" href="#">Ver m??s informaci??n</Card.Link>
                </Card.Body>
              </Card>
              </Form>                                 
            </Accordion.Collapse>
          
            <Accordion.Collapse eventKey="1"> 
                  <Boton contenido="GUARDAR"></Boton>
            </Accordion.Collapse>
            </div>
        </Accordion>

      <Piedepag></Piedepag>
    </Form>
    </div>
    )
  }
}
export default Micuentaemp;