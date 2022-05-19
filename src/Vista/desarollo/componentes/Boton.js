import React, { Component } from "react";
import { render } from "react-dom"

class Boton extends Component
{
  constructor(props)
  {
    super(props)
  }
  render()
  {
    return (
    <button style={{margin:'20px'}}class='botonReact'>{this.props.contenido}</button>
    )
  }
}
export default Boton;
