import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  constructor(){
    super()
    this.state = {
      sushis: [],
      eatenSushi: [],
      moneyRemaining: 100
    }
  }

  componentDidMount(){
    fetch(API)
      .then( res => res.json())
      .then( data => this.setState({ sushis: data }) )
  }

  displaySushi(){
    return this.state.sushis.slice(0, 4)
  }

  moreSushi = () => {
    //this.state.sushis.splice(0, 4)
    this.setState({ sushis: this.state.sushis.slice(4)})
  }

  eatSushi = (sushi) => {
    if(!this.state.eatenSushi.includes(sushi) && this.state.moneyRemaining > sushi.price){
      this.setState({ 
        eatenSushi: [ ...this.state.eatenSushi, sushi], 
        moneyRemaining: this.state.moneyRemaining - sushi.price
      })
    }
  }

  render() {
    console.log(this.state)
    return (
      <div className="app">
        <SushiContainer sushis={this.displaySushi()} eatenSushi={this.state.eatenSushi} moreSushi={this.moreSushi} eatSushi={this.eatSushi}/>
        <Table moneyRemaining={this.state.moneyRemaining} eatenSushi={this.state.eatenSushi} />
      </div>
    );
  }
}

export default App;