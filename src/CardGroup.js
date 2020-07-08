import React from 'react';
import './App.css';
import { Grid, Card } from 'semantic-ui-react';

class CardGroup extends React.Component {

  render(){
      let cards;
      if (this.props.input){
        cards = Object.entries(this.props.obj).map(([key, value]) => {
            let rate = Number(value)
            let val = Number(this.props.input)
            let result = (rate*val).toFixed(2);
            console.log(result)
            return (
                <Card header={key} description={result} color="purple"/>
            )
          });
      }

    return (
      <div className="CardGroup">
          <Grid columns="three" divided>
            <Grid.Row>
                {cards}
            </Grid.Row>
          </Grid>
      </div>
    );
  }
}

export default CardGroup;
