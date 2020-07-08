import React from 'react';
import './App.css';
import { Input, Label } from 'semantic-ui-react'
import CardGroup from "./CardGroup";

class ConverterContainer extends React.Component {
    state={
        rateContainer: [],
        searchTerm: "",
        searchClicked: false,
    }

    componentDidMount(){
        fetch(`https://open.exchangerate-api.com/v6/latest`)
        .then(resp=>resp.json())
        .then(data=>this.setState({rateContainer: data.rates}))
    }

    // Handling for Input Field
    handleOnChange = (e) => {
        this.setState({
            searchTerm: e.target.value
        })
    }
    handleSearchClick = (e) => {
        e.preventDefault();
        this.setState({
            searchClicked: true,
        })
    }

  render(){

    return (
      <div className="ConverterContainer">
          <form onSubmit={(e)=> this.handleSearchClick(e)} autoComplete="off">
                <Input 
                    labelPosition="right"
                    id="searchInput"
                    name="text"
                    type="text"
                    placeholder="Enter USD Amount"
                    onChange={(e)=>this.handleOnChange(e)}
                    value={this.state.searchTerm} 
                    >
                    <Label basic>$</Label>
                        <input />
                    {this.state.searchTerm.includes('.') ? null : <Label>.00</Label>}
                </Input>
             </form>
            {this.state.searchTerm && this.state.rateContainer ? <CardGroup obj={this.state.rateContainer} input={this.state.searchTerm}/> : null}
      </div>
    );
  }
}

export default ConverterContainer;
