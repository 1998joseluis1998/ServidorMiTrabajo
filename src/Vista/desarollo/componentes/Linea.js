import React, { Component } from "react";
import { render } from "react-dom"
class Linea extends Component
{
    constructor(props)
    {
        super(props);
    }
  render()
  {
    return (
        <hr align="center" noshade="noshade" size="2" width="60%" />
    )
  }
}
export default Linea;