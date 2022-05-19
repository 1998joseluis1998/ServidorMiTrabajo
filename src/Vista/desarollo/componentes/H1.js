import React, { Component } from "react";
import { render } from "react-dom"

class H1 extends Component
{
    constructor(props)
    {
        super(props)
    }
  render()
  {
      
    return (
      <h1 class='h1React'>{this.props.contenido}</h1>
    )
  }
}
export default H1;
