import React, { Component } from "react";
import Boton from "../componentes/Boton.js";
import FotoTexto from "../componentes/fototexto.js";
import { NavDropdown, Card, DropdownButton, ButtonGroup, Dropdown, Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import Piedepag from "./Piedepag.js";
import Cabecera from "./Cabecera.js";



class Inicio extends Component {
  render() {
    return (
      <div>
        <Cabecera></Cabecera>
        <FotoTexto foto='/ImageSystem/imagen7.jpg' degrade='linear-gradient(90deg, rgba(0,0,0, 0.2), rgba(0,0,0, 0.5),rgba(0,0,0, 0.5), rgba(0,0,0, 0.2))'>
          <div style={{ color: '#fff' }}>
            <h1 style={{textAlign:'center'}}> Mi trabajo</h1>
            <div>
              Este sitio web es una plataforma para conocer<br />
              mas información acerca de oferta <br />
              y demanda de trabajo publicados por<br />
              empresas y personasen Bolivia-Cochabamba<br />
            </div>
          </div>
        </FotoTexto>
        <FotoTexto foto='/ImageSystem/imagen4.jpg' degrade='linear-gradient(90deg, rgba(0,0,0, 0.2), rgba(0,0,0, 0.5),rgba(0,0,0, 0.5), rgba(0,0,0, 0.2))'>
          <div style={{ color: '#fff' }}>
            <div>
              <h1 style={{textAlign:'center'}}>El sitio web dónde encuentras<br/></h1>
              <h1 style={{textAlign:'center'}}>tu trabajo ideal</h1>
              <p style={{textAlign:'center'}}>Crea tu cuenta y realiza publicaciones de oferta y demanda de trabajo</p>
              <div><Boton class="botonReact"  render="/Crearpersona" contenido="CREAR CUENTA PERSONA"></Boton>
              <Boton contenido="CREAR CUENTA EMPRESA"></Boton>
              </div>
            </div>
          </div>
        </FotoTexto>
        <FotoTexto foto='/ImageSystem/imagen1.jpg' degrade='linear-gradient(90deg, rgba(0,0,0, 0.2), rgba(0,0,0, 0.5),rgba(0,0,0, 0.5), rgba(0,0,0, 0.2))'>
          <div style={{ color: '#fff' }}>
            <div>
              <h1 style={{textAlign:'center'}}>Oferta y Demanda<br/></h1>              
              <p style={{textAlign:'center'}}>Busca de manera rapida ofertas y demanda de empleos</p>
              <div><Boton className="margen" contenido="BUSCAR OFERTA"></Boton>
              <Boton contenido="BUSCAR DEMANDA"></Boton>
              </div>
            </div>


          </div>
        </FotoTexto>
        <FotoTexto foto='/ImageSystem/imagen2.jpg' degrade='linear-gradient(90deg, rgba(0,0,0, 0.2), rgba(0,0,0, 0.5),rgba(0,0,0, 0.5), rgba(0,0,0, 0.2))'>
          <div style={{ color: '#fff' }}>
            <div>
              <h1 style={{textAlign:'center'}}>Curriculum Vitae<br/></h1>              
              <p style={{textAlign:'center'}}>Busca de manera rapida curriculum vitaes para ofrecer un puesto de trabajo</p>
              <div style={{justifyContent:'center',textAlign:'center'}}><Boton  contenido="BUSCAR CV"></Boton>              
              </div>
            </div>

          </div>
        </FotoTexto>
        
        <div>

        </div>
        <Piedepag></Piedepag>
      </div>
    )
  }
}
export default Inicio;
