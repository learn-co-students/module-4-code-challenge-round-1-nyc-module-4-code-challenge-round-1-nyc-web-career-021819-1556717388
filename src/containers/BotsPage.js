import React from "react";
import BotCollection from './BotCollection';
import YourBotArmy from './YourBotArmy';
import BotSpecs from '../components/BotSpecs';
const API = 'https://bot-battler-api.herokuapp.com/api/v1/bots'

class BotsPage extends React.Component {

  state = {
    bots: [],
    army: [],
    selectedBot: ''
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

    const botsArmy = [...this.state.army]
    const botsArray = [...this.state.bots]
    const selectedBot = botsArray.find(bot => bot.id === id)

    if (botsArmy.find(bot => bot.id === id)) {
      const idx = botsArmy.findIndex(bot => bot.id === id)
      botsArmy.splice(idx, 1)
      this.setState({ army: botsArmy })

    } else {
      this.setState({ selectedBot: selectedBot })
    }

  }

  renderArmy = () => {
    const bots = [...this.state.bots]
    const army = bots.filter(bot => bot.selected)
    this.setState({ army: army })
  }

  handleBack = (e) => {
    e.preventDefault()
    this.setState({ selectedBot: '' })

  }

  handleEnlist = (e, id) => {
    e.preventDefault()
    const botsArray = [...this.state.bots]
    const botsArmy = [...this.state.army]

    const selectedBot = botsArray.find(bot => bot.id === id)
    botsArmy.push(selectedBot)
    this.setState({ bots: botsArray, army: botsArmy, selectedBot: '' })

  }

  render() {
    const { bots, army, selectedBot } = this.state
    return (
      <div>
        <YourBotArmy
          army={army.length > 0 ? army : []}
          handleBot={this.handleBot} />
        {selectedBot ?
          <BotSpecs
            bot={selectedBot}
            handleBack={this.handleBack}
            handleEnlist={this.handleEnlist} /> :
          <BotCollection
            bots={bots}
            handleEnlist={this.handleEnlist}
            handleBot={this.handleBot}
            selectedBot={selectedBot}
            handleBack={this.handleBack} />}
      </div>
    );
  }

}

export default BotsPage;
