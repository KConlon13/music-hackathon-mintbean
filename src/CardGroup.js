import React from 'react';
import './App.css';
import { Grid, Card, Icon } from 'semantic-ui-react';

class CardGroup extends React.Component {

  render(){
      let cards;
      if (this.props.input){
        cards = Object.entries(this.props.obj).map(([key, value]) => {
            let rate = Number(value)
            let val = Number(this.props.input)
            let result = (rate*val).toFixed(2).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
            if (isNaN(val) === true){
                result = "-";
            }
            let cardColor;
            if (rate >= 1){
                cardColor="green"
            } else {
                cardColor="red"
            }
            return (
                <Card color="purple">
                    <Card.Content>
                        <Card.Header onClick={()=>window.open(`https://www.google.com/search?q=${key}+currency`, '_blank')}>
                            <a>{key}</a>
                        </Card.Header>
                        <div>
                            <Icon name="exchange" color={cardColor}/>
                            <Card.Description>{result}</Card.Description>
                        </div>
                    </Card.Content>
                </Card>
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
