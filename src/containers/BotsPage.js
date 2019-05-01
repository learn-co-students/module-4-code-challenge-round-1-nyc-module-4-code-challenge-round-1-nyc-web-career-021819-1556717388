import React from "react";
import BotCollection from './BotCollection';
import YourBotArmy from './YourBotArmy';
const API = 'https://bot-battler-api.herokuapp.com/api/v1/bots'

class BotsPage extends React.Component {

  state = {
    bots: [],
    army: []
  }

  componentDidMount() {
    fetch(API)
      .then(res => res.json())
      .then(data => {
        let botsState = []
        data.forEach(bot => {
          botsState.push({
            ...bot
            , selected: false
          })
        })
        this.setState({ bots: botsState })
      })
  }

  handleBot = (e, id) => {
    const botsArray = [...this.state.bots]
    const botsArmy = [...this.state.army]
    const selectedBot = botsArray.find(bot => bot.id === id)

    if (botsArray.find(bot => bot.id === id) && botsArmy.find(bot => bot.id === id)) {
      const idx = botsArmy.findIndex(bot => bot.id === id)
      selectedBot.selected = false
      const mainIdx = botsArray.findIndex(bot => bot.id === id)
      botsArray[mainIdx] = selectedBot
      botsArmy.splice(idx, 1)
      this.setState({ bots: botsArray, army: botsArmy })
    } else if (selectedBot.selected !== true) {
      const status = selectedBot.selected
      selectedBot.selected = !status
      const idx = botsArray.findIndex(bot => bot.id === id)
      botsArray[idx] = selectedBot
      this.setState({ bots: botsArray }, this.renderArmy)
    }
  }

  renderArmy = () => {
    const bots = [...this.state.bots]
    const army = bots.filter(bot => bot.selected)
    this.setState({ army: army })
  }


  render() {
    const { bots, army } = this.state
    return (
      <div>
        <YourBotArmy army={army.length > 0 ? army : []} handleBot={this.handleBot} />
        <BotCollection bots={bots} handleBot={this.handleBot} />
      </div>
    );
  }

}

export default BotsPage;
