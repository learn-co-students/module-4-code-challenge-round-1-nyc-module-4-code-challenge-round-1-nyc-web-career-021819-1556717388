import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'
import Filter from '../components/Filter'

class BotsPage extends React.Component {
  //start here with your code for step one

  state = {
    bots: [],
    army: [],
    input: ''
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

  handleClick = () => {
   const sortedBots = this.state.bots.sort((bot1, bot2) => {
      return  bot2.health - bot1.health
   })
   this.setState({
     bots: sortedBots
   })
  }

  filteredBots = () => {
    return this.state.bots.filter(bot => {
      return bot.name.includes(this.state.input)
    })
  }

  handleChange = (e) => {
    this.setState({
        input: e.target.value
    })
  }

  render() {
    console.log(this.state.input)
    return (
      <div>
        {/* put your components here */}
        <YourBotArmy  addToArmy={this.addToArmy} army={this.state.army} />
        <br></br>
        <br></br>
        <button onClick={this.handleClick} >Sort by Health</button>
        <Filter handleChange={this.handleChange} />
        <br></br>
        <br></br>
        <BotCollection army={this.state.army} addToArmy={this.addToArmy} army={this.state.army} bots={this.filteredBots()}/>
      </div>
    );
  }

  componentDidMount() {
    this.getBots()
  }

}

export default BotsPage;
