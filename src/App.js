import React from 'react';
import './App.css';
import {  } from 'semantic-ui-react';
import Logo from "./MoneyLogo.png";
import ConverterContainer from "./ConverterContainer";

class App extends React.Component {

  render(){
    return (
      <div className="App">
        <img src={Logo} id="money-logo" alt="money logo here!"/>
        <ConverterContainer/>
      </div>
    );
  }
}

export default App;
