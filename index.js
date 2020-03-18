import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

let nombre="Duany";
function A(props){
  return <p>Hola {props.nombre} </p>  
}
function B(props){
  return <p>{props.nombre}:10 </p>  
}
class MicomponenteClase extends Component{
  render(){
    return <p>Hola soy de la clase</p>  
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        <Hello name={this.state.name} />
        <A nombre="Duany"/>
        <B nombre="Duany"/>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
