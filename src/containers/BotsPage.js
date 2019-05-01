import React from "react";
import BotsCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'


class BotsPage extends React.Component {
  state = {
    bots: [],
    clickedBots: []
  }

  componentDidMount() {
    fetch("https://bot-battler-api.herokuapp.com/api/v1/bots")
    .then(r => r.json())
    .then(data => (
      this.setState({ bots: data })
    ))
  }

  handleClick = (bot) => {
    this.setState({clickedBots: [...this.state.clickedBots, bot]})
  }

  handleRemove = (selectBot) => {
    let armyBots = this.state.clickedBots.filter (bot => {
      return bot.id !== selectBot.id
    })

    this.setState({
      clickedBots: armyBots
    })
  }


  render() {
    console.log(this.state.clickedBots)
    return (
      <div>
        <YourBotArmy
        bots={this.state.clickedBots}
        handleClick = {this.handleRemove}
        />
        <BotsCollection
          bots={this.state.bots}
          handleClick={this.handleClick}
        />
      </div>
    );
  }

}

export default BotsPage;
