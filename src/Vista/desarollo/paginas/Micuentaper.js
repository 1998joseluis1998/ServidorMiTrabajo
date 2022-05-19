import React, { Component } from "react";
import { render } from "react-DOM";
import Boton from "../componentes/Boton.js";
import H1 from "../componentes/H1.js";
import {Accordion,Card,Form,Row,ListGroup,ListGroupItem,Button,Col} from 'react-bootstrap';
import Cabecera from "./Cabecera.js";
import Piedepag from "./Piedepag.js";

class Micuentaper extends Component
{

  render()
  {
    return (
      
        <div> 
        <Cabecera></Cabecera>
      <Form action="/Micuentapersona"method="POST">
      <H1 contenido="Mi Cuenta"></H1>
        <Accordion defaultActiveKey="0">
            <Accordion.Toggle as={Card.Header} eventKey="1">
            <H1 contenido="Mi Perfil"></H1> 
            </Accordion.Toggle>            
            <div id="contenido">            
            <Accordion.Collapse eventKey="1">              
            <Form.Row>        
                <Form.Group as={Col} >
                  <Form.Label bsPrefix="labelReact">Carnet de Identidad</Form.Label>
                  <Form.Control  bsPrefix="cajaReact" type="number" name="ci"placeholder="Carnet de Identidad"/>
                  </Form.Group>
                  <Form.Group as={Col} >
                  <Form.Label bsPrefix="labelReact">Usuario</Form.Label>
                  <Form.Control  bsPrefix="cajaReact" type="text" name="nombre"placeholder="Usuario" />
                </Form.Group>
            </Form.Row>
            </Accordion.Collapse>
            <Accordion.Collapse eventKey="1"> 
                <Form.Row>
                    <Form.Group as={Col} >
                    <Form.Label bsPrefix="labelReact">Correo Electrónico</Form.Label>
                    <Form.Control bsPrefix="cajaReact" type="email" name="correo"placeholder="Correo Electrónico" />
                    </Form.Group>
                    <Form.Group as={Col} >
                    <Form.Label bsPrefix="labelReact">Contraseña</Form.Label>
                    <Form.Control bsPrefix="cajaReact" type="password" name="contraseña"placeholder="Contraseña"/>
                    </Form.Group>
                </Form.Row>
            </Accordion.Collapse>
            <Accordion.Collapse eventKey="1">
            <Form.Row>        
                <Form.Group as={Col} >
                    <Form.Label bsPrefix="labelReact">País</Form.Label>
                    <Form.Control name="pais" bsPrefix="cajaReact"as="select">
                        <option value="">Seleccionar País</option>
                        <option>Bolivia</option>
                        <option>Otro País</option>
                    </Form.Control>
                    </Form.Group>          
                    <Form.Group as={Col} >
                    <Form.Label bsPrefix="labelReact">Ciudad</Form.Label>
                    <Form.Control name="ciudad"bsPrefix="cajaReact"as="select">
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
            </Form.Row>
            </Accordion.Collapse>
            <Accordion.Collapse eventKey="1">   
            <Form.Row>        
                <Form.Group as={Col} >
                    <Form.Label bsPrefix="labelReact">Nombre(s)</Form.Label>
                    <Form.Control  bsPrefix="cajaReact" type="text" name="nombre" placeholder="Nombre(s)"/>
                    </Form.Group>
                    <Form.Group as={Col} >
                    <Form.Label bsPrefix="labelReact">Apellido(s)</Form.Label>
                    <Form.Control  bsPrefix="cajaReact" type="text" name="apellido"placeholder="Apellido(s)" />
                </Form.Group>
            </Form.Row>
            </Accordion.Collapse>                     
            <Accordion.Collapse eventKey="1"> 
            <Form.Row>
                    <Form.Group as={Col} >
                    <Form.Label bsPrefix="labelReact">Facebook</Form.Label>
                    <Form.Control bsPrefix="cajaReact" type="text" name="facebook"placeholder="Facebook" />
                    </Form.Group>
                    <Form.Group as={Col} >
                    <Form.Label bsPrefix="labelReact">Dirección</Form.Label>
                    <Form.Control bsPrefix="cajaReact" type="text" name="direccion"placeholder="Dirección"/>
                    </Form.Group>
                </Form.Row>
            </Accordion.Collapse>
            <Accordion.Collapse eventKey="1"> 
            <Form.Row>
                    <Form.Group as={Col} >
                    <Form.Label bsPrefix="labelReact">Teléfono</Form.Label>
                    <Form.Control bsPrefix="cajaReact" type="tel" name="telefono"placeholder="Teléfono" />
                    </Form.Group>
                    <Form.Group as={Col} >
                    <Form.Label bsPrefix="labelReact">Celular</Form.Label>
                    <Form.Control bsPrefix="cajaReact" type="text" name="celular" placeholder="Celular"/>
                    </Form.Group>
                </Form.Row>
            </Accordion.Collapse>      
            <Accordion.Collapse eventKey="1"> 
            <Form.Row>
                    <Form.Group as={Col} >
                    <Form.Label bsPrefix="labelReact">Fecha de Nacimiento</Form.Label>
                    <Form.Control bsPrefix="cajaReact" type="date" name="fechanac"placeholder="Fecha de Nacimiento" />
                    </Form.Group>

                    <Form.Group as={Col} >
                    <Form.Row>
                    <Form>
                    <fieldset>
                    <Form.Group as={Row}>                     
                      <Col sm={10}>
                        <Form.Check
                          type="radio"
                          label="Masculino"
                          name="masculino"                          
                        />
                        <Form.Check
                          type="radio"
                          label="Femenino"
                          name="femenino"                          
                        />
                      </Col>
                    </Form.Group>
                   </fieldset>
                   </Form>
                    </Form.Row>
                    </Form.Group>                    
                </Form.Row>
            </Accordion.Collapse>                
            <Accordion.Collapse eventKey="1"> 
                    <Boton contenido="GUARDAR"></Boton>
            </Accordion.Collapse>
            </div>
            </Accordion>

        <Accordion defaultActiveKey="0">
            <Accordion.Toggle as={Card.Header} eventKey="1">
            <H1 contenido="Mi Curriculum Vitae"></H1> 
            </Accordion.Toggle>
            <div id="contenido">
            <Accordion.Collapse eventKey="1">                                    
            <Form.Row>                                  
            <H1 contenido="Perfil "></H1>               
                    <Form.Group as={Col} >
                    <Form.Label bsPrefix="labelReact">Ingrese Imagen de Empresa</Form.Label>
                    <Form.Control  bsPrefix="cajaReact" type="text" name="foto"placeholder="Imagen de Empresa" />
                    </Form.Group>
                    <Form.Group as={Col} >
                    <Form.Label bsPrefix="labelReact">Breve Descripción</Form.Label>
                    <Form.Control name="descripcion"bsPrefix="cajaReact"as="textarea" rows="6" />
                    </Form.Group>
            </Form.Row>
            </Accordion.Collapse>

            <Accordion.Collapse eventKey="1">   
            <Form.Row> 
            <H1 contenido="Formación"></H1>                  
                <Form.Group as={Col} >
                    <Form.Label bsPrefix="labelReact">Formación</Form.Label>
                    <Form.Control  bsPrefix="cajaReact" type="text" name="formacion" placeholder="Formación"/>
                    </Form.Group>
                    <Form.Group as={Col} >
                    <Form.Label bsPrefix="labelReact">Institución</Form.Label>
                    <Form.Control  bsPrefix="cajaReact" type="text" name="institucion"placeholder="Institución" />
                </Form.Group>
                <Form.Group as={Col} >
                    <Form.Label bsPrefix="labelReact">Desde</Form.Label>
                    <Form.Control  bsPrefix="cajaReact" type="date" name="fdesde" placeholder="Desde"/>
                    </Form.Group>
                    <Form.Group as={Col} >
                    <Form.Label bsPrefix="labelReact">Hasta</Form.Label>
                    <Form.Control  bsPrefix="cajaReact" type="date" name="fhasta"placeholder="Hasta" />
                </Form.Group>                
                  <Boton contenido="AGREGAR CAMPO"></Boton>            
            </Form.Row>
            </Accordion.Collapse>

            <Accordion.Collapse eventKey="1">
            <Form.Row>        
            <H1 contenido="Experiencia"></H1>    
            <Form.Group as={Col} >
                    <Form.Label bsPrefix="labelReact">Cargo</Form.Label>
                    <Form.Control  bsPrefix="cajaReact" type="text" name="cargo" placeholder="Cargo"/>
                    </Form.Group>
                    <Form.Group as={Col} >
                    <Form.Label bsPrefix="labelReact">Empresa</Form.Label>
                    <Form.Control  bsPrefix="cajaReact" type="text" name="empresa"placeholder="Empresa" />
                </Form.Group>
                <Form.Group as={Col} >
                    <Form.Label bsPrefix="labelReact">Desde</Form.Label>
                    <Form.Control  bsPrefix="cajaReact" type="date" name="edesde" placeholder="Desde"/>
                    </Form.Group>
                    <Form.Group as={Col} >
                    <Form.Label bsPrefix="labelReact">Hasta</Form.Label>
                    <Form.Control  bsPrefix="cajaReact" type="date" name="ehasta"placeholder="Hasta" />
                </Form.Group>
                <Form.Group as={Col} >
                    <Form.Label bsPrefix="labelReact">Breve Descripción</Form.Label>
                    <Form.Control name="edescripcion"bsPrefix="cajaReact"as="textarea" rows="6" />
                    </Form.Group>
                <Boton contenido="AGREGAR CAMPO"></Boton>            
            </Form.Row>
            </Accordion.Collapse>

            <Accordion.Collapse eventKey="1"> 
                <Form.Row>
                  <H1 contenido="Habilidades"></H1>
                    <Form.Group as={Col} >
                    <Form.Label bsPrefix="labelReact">Habilidad</Form.Label>
                    <Form.Control bsPrefix="cajaReact" type="text" name="habilidad"placeholder="Habilidad" />
                    </Form.Group>
                    <Form.Group as={Col} >
                    <Form.Label bsPrefix="labelReact">Nivel</Form.Label>
                    <Form.Control name="hnivel"bsPrefix="cajaReact"as="select">
                        <option value="">Seleccionar Nivel</option>
                        <option  >Muy Bajo</option>
                        <option  >Bajo</option>
                        <option  >Mediano</option>
                        <option  >Alto</option>
                        <option  >Muy alto</option>                        
                    </Form.Control>
                    </Form.Group>
                    <Boton contenido="AGREGAR CAMPO"></Boton>            
                </Form.Row>
            </Accordion.Collapse>

            <Accordion.Collapse eventKey="1"> 
            <Form.Row>
              <H1 contenido="Idiomas"></H1>
              <Form.Group as={Col} >
                    <Form.Label bsPrefix="labelReact">Idioma</Form.Label>
                    <Form.Control bsPrefix="cajaReact" type="text" name="idioma"placeholder="Idioma" />
                    </Form.Group>
                    <Form.Group as={Col} >
                    <Form.Label bsPrefix="labelReact">Nivel</Form.Label>
                    <Form.Control name="inivel"bsPrefix="cajaReact"as="select">
                        <option value="">Seleccionar Nivel</option>
                        <option  >Muy Bajo</option>
                        <option  >Bajo</option>
                        <option  >Mediano</option>
                        <option  >Alto</option>
                        <option  >Muy alto</option>                        
                    </Form.Control>
                    </Form.Group>
                    <Boton contenido="AGREGAR CAMPO"></Boton>            
                </Form.Row>
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
                    <Form.Label bsPrefix="labelReact">Breve Descripción: </Form.Label>
                    <Form.Label bsPrefix="labelReact"> "vacio"</Form.Label>
                    </Form.Group>
                <Card.Body>                  
                  <Card.Link bsPrefix="cajaReact" href="#">Ver más información</Card.Link>
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
                    <Form.Label bsPrefix="labelReact">Breve Descripción: </Form.Label>
                    <Form.Label bsPrefix="labelReact"> "vacio"</Form.Label>
                    </Form.Group>
                <Card.Body>                  
                  <Card.Link bsPrefix="cajaReact" href="#">Ver más información</Card.Link>
                </Card.Body>
              </Card>
              </Form>                                 
            </Accordion.Collapse>
          
            <Accordion.Collapse eventKey="1"> 
                  <Boton contenido="GUARDAR"></Boton>
            </Accordion.Collapse>
            </div>
        </Accordion>
     </Form>
     <Piedepag></Piedepag>
      </div>
    )
  }
}


export default Micuentaper;