import React from 'react';
import './App.css';
import { Card } from 'semantic-ui-react';

class SingleCard extends React.Component {

  render(){
    console.log(this.props, "CARD PROPS")
    return (
      <div className="SingleCard">
          <Card>{this.props.value}</Card>
          <h1>{this.props.value}</h1>
      </div>
    );
  }
}

export default SingleCard;