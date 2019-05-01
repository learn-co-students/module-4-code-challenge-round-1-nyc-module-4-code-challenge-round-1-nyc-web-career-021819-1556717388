import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'
import BotSpecs from '../components/BotSpecs'

let specs
let collection
class BotsPage extends React.Component {
  //start here with your code for step one
  state={
    bots: [],
    botArmy: [],
    specs: []
  }

  componentDidMount(){
    fetch("https://bot-battler-api.herokuapp.com/api/v1/bots")
    .then(res => res.json())
    .then(bots => this.setState({bots: bots}))
  }

  addBot = (bot) => {
    if (this.state.botArmy.filter(botObj => botObj.id === bot.id).length === 0) {
      this.setState({botArmy: [...this.state.botArmy, bot]})
    }
  }

  specs = (bot) => {
    if (this.state.specs.length === 0) {
      this.setState({specs: [...this.state.specs, bot]})
      specs = <BotSpecs bot={bot} botHandler={this.addBot} collection={this.colleciton}/>
    }
  }

  // collection = () => {
  //   this.setState({specs: []})
  //   collection = <BotCollection bots={this.state.bots} botHandler={this.addBot} specs={this.specs}/>
  // }

  removeBot = (bot) => {
    let bots = this.state.botArmy.filter(botObj => botObj.id !== bot.id)
    this.setState({botArmy: bots})
  }

  render() {
    console.log(this.state.specs)
    return (
      <div>
        {this.state.specs.length === 0 ? collection : specs}
        <YourBotArmy botArmy={this.state.botArmy} botHandler={this.removeBot}/>
        <BotCollection bots={this.state.bots} botHandler={this.addBot} specs={this.specs}/>
      </div>
    );
  }
}

export default BotsPage;
