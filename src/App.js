import React, { Component } from 'react';
import './styles/index.css';
import { Div } from './styles/style.js';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      var: 0,
      cont: 0,
      background: '#7DBFE8',
      display: 'none',
      displayInput: '',
    };
  }
  
  handleClick = (teste) => {
    this.setState({ var: teste });
    this.setState({ cont: this.state.cont + 1 });

    if(this.state.background === '#7DBFE8') {
      this.setState({ background: '#fff' });
    } else {
      this.setState({ background: '#7DBFE8' });
    }
  }

  handleDisplay = (display) => {
    this.setState({ display: '' });
    this.setState({ displayInput: 'none' });
  }

  render() {
    let teste = 3;
    const { background } = this.state;
    const { display } = this.state;
    const { displayInput } = this.state;

    return (
      <div>      
        <Div style = {{ backgroundColor: background }}>
          <div style={{ display: displayInput  }}>
            <input type="number"/>
            <button onClick={() => this.handleDisplay(display)} 
            className="button__input">OK</button>
          </div>
          <div style={{ display: display }}>
            <i className="fas fa-infinity"></i>
            <p>Contador: {this.state.cont}</p>
            <button onClick={() => this.handleClick(teste)}
            className="button__counter">ADD</button>
          </div>       
        </Div>
      </div>
    );
  }  
}