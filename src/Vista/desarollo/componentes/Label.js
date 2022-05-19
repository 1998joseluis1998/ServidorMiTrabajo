import React, { Component } from "react";
import { render } from "react-dom"
class Label extends Component
{
    constructor(props)
    {
        super(props);
    }
  render()
  {
    return (
    <label class='labelReact'>{this.props.contenido}</label>
    )
  }
}
export default Label;