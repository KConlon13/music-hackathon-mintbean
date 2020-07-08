import React from 'react';
import './App.css';
import { Input, Label } from 'semantic-ui-react'

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
        this.initiateExchange(this.state.searchTerm)
        this.setState({
            searchTerm: "",
            searchClicked: true,
        })
    }
    initiateExchange = (input) => {
        console.log("dis is an input hooray", input)
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
                    <Label>.00</Label>
                </Input>
             </form>
      </div>
    );
  }
}

export default ConverterContainer;
