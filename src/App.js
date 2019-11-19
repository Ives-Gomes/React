import React, { Component } from 'react';
import './styles/index.css';
import { Div, GlobalStyle } from './styles/style.js';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      var: 0,
      cont: 0,
    };
  }
  
  handleClick = (teste) => {
    this.setState({ var: teste });
    this.setState({ cont: this.state.cont + 1 })
  }

  render() {
    let teste = 3;

    return (
        <Div>
          <i class="fas fa-award"></i>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
            nisi ut aliquip ex ea commodo consequat. {this.state.var}, Contador:
            {this.state.cont}</p>
          <button onClick={() => this.handleClick(teste)}>ADD</button>  
        </Div>  
    );
  }  
}