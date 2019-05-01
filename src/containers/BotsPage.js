import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'

class BotsPage extends React.Component {
  //start here with your code for step one

  state = {
    bots: [],
    army: []
  }

  getBots = () => {
    fetch(`https://bot-battler-api.herokuapp.com/api/v1/bots`)
    .then(res => res.json())
    .then(bots => {
      this.setState({
        bots: bots
      })
    })
  }

  addToArmy = (botObj) => {
    if (!this.state.army.find(bot => bot.id === botObj.id)){
      this.setState( prevState => {
        return {
          army: [...prevState.army, botObj]
        }
      })
    } else {
      this.setState( prevState => {
        const newArmy = prevState.army.filter(bot => bot.id !== botObj.id)
        return {
          army: newArmy
        }
      })
    }
  }

  removeFromArmy = (botObj) => {
    console.log("hello")
  }

  render() {
    console.log(this.state.army)
    return (
      <div>
        {/* put your components here */}
        <YourBotArmy  addToArmy={this.addToArmy} army={this.state.army} />
        <BotCollection army={this.state.army} addToArmy={this.addToArmy} army={this.state.army} bots={this.state.bots}/>
      </div>
    );
  }

  componentDidMount() {
    this.getBots()
  }

}

export default BotsPage;
