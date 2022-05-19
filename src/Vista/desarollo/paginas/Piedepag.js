import React, { Component } from "react";

import {NavDropdown,Card,DropdownButton,ButtonGroup,Dropdown,Navbar,Nav,Form,FormControl,Button} from 'react-bootstrap';
import Label from "../componentes/Label";

const pie = {
  width: '100vw',
  height: '200px',
  background: '#0B263D',
  color: 'white',
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
}
const icono = {
  margin: '0 5px',
  fontSize: '25px'
}
const firma =
{
  fontSize: '16px',
  letterSpacing: '2px'
}

class Piedepag extends Component
{
  render()
  {
    return (
      <div style = {pie} className='flexV'>
        <div style = {{width:"720px",  display: "flex",  justifyContent: "center",  alignItems: "center"}}>
        <div style={{marginLeft: "0px", marginRight: "auto"}}>
          <label>Inicio</label> <br></br>
          <label>Oferta/Demanda</label> <br></br>
          <label>Mi Cuenta</label> <br></br>
          <label>Buscar</label> <br></br>
          <label>Iniciar Sesión</label> <br></br>
        </div>
        <div style = {{marginLeft: "auto", marginRight: "auto"}}>
        <label>COPYRIGHTS</label>
        </div>          
      <div style = {{marginLeft: "auto", marginRight: "0px"}}>
        <i style = {icono} className="fa fa-facebook-square"></i>        
        <i style = {icono} className="fa fa-instagram"></i>
        <i style = {icono} className="fa fa-twitter-square"></i>
      </div>
        </div>
        
      <br></br>
      
    </div>
    )
  }
}
export default Piedepag;
