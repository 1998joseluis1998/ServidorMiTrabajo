import React, { Component } from "react";
import { render } from "react-DOM";
import Boton from "../componentes/Boton.js";
import H1 from "../componentes/H1.js";
import {Navbar,Nav,NavDropdown,Accordion,Card,Form,Row,ListGroup,ListGroupItem,Button,Col} from 'react-bootstrap';


class Cabecera extends Component
{

  render()
  {
    return (
        <div style={{minWidth:"100%", background: "#04375c", display: "flex", justifyContent:"center"}}>
        <Navbar class="cabeceraReact" style = {{width:"986px"}}>
          <img src="/ImageSystem/Logo.png"></img>
          <div >
          <Nav >
            <Nav.Link className="textoReact" href="/" style = {{marginLeft:"0px", marginRight: "auto"}}>Inicio</Nav.Link>
            <NavDropdown className="textoReact" title="Oferta/Demanda" value="Oferta/Demanda" style = {{marginLeft:"auto", marginRight: "auto"}}>
          <NavDropdown.Item className="cabeceraReact" href="/PublicarOferta">Publicar Oferta</NavDropdown.Item>
          <NavDropdown.Divider />        
          <NavDropdown.Item className="cabeceraReact" href="/PublicarDemanda">Publicar Demanda</NavDropdown.Item>          
          </NavDropdown>
            <Nav.Link className="textoReact" href="/MiCuenta" style = {{marginLeft:"auto", marginRight: "auto"}}>Mi Cuenta</Nav.Link>
          <NavDropdown  className="textoReact" title="Buscar" id="basic-nav-dropdown" style = {{marginLeft:"auto", marginRight: "auto"}}>
          <NavDropdown.Item className="cabeceraReact" href="/BuscarOferta">Buscar Oferta</NavDropdown.Item>
          <NavDropdown.Divider />        
          <NavDropdown.Item className="cabeceraReact" href="/BuscarDemanda">Buscar Demanda</NavDropdown.Item>          
          <NavDropdown.Divider />        
          <NavDropdown.Item className="cabeceraReact" href="/BuscarCV">Buscar CV</NavDropdown.Item>          
          </NavDropdown>
            <Nav.Link  className="textoReact" href="IniciarSesion" style = {{marginLeft:"auto", marginRight: "0px"}}>Iniciar Sesión</Nav.Link>            
          </Nav>
          </div>                 
        </Navbar>        

        </div>
        )
    }
}

export default Cabecera;
