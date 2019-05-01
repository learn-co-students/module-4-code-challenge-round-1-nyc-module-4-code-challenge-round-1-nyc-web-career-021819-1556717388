import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'
import BotSearch from './BotSearch'

class BotsPage extends React.Component {

  state = {
    bots: [],
    foundBot: false
  }

  componentDidMount() {
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
    .then(res => res.json())
    .then(data => {
      this.setState({
        bots: data
      })
    })
  }

  handleClick = (id) => {
    const foundBot = this.state.bots.find(bot => bot.id === id)
    this.setState({
      foundBot: foundBot
    })
  }

  renderArmyBots = () => {
    return this.state.bots.filter(robot => robot.enlisted === true)
  }

  handleGoBack = (id) => {
    this.setState({
      foundBot: false
    })
  }

  handleAddBot = (id) => {
    const foundBot = this.state.bots.find(bot => bot.id === id)
    const newBots = this.state.bots.map(bot => {
      if (bot === foundBot) {
        return {...bot, enlisted: true}
      } else {
        return bot
      }
    })
    this.setState({
      bots: newBots
    })
  }

  onSearchChange = (search) => {
    const searchBots = this.state.bots.filter(bot => {
      // Just bc I couldnt finish filter
      return bot.name.includes('')
    })
    return searchBots
  }

  render() {
    return (
      <div>
        {<YourBotArmy bots={this.renderArmyBots()}/>}
        {<BotSearch bots={this.state.bots} onSearchChange={this.onSearchChange}/>}
        {<BotCollection bots={this.onSearchChange()} handleClick={this.handleClick} foundBot={this.state.foundBot} handleAddBot={this.handleAddBot} handleGoBack={this.handleGoBack}/>}
      </div>
    );
  }

}

export default BotsPage;
