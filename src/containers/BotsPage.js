import React from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy";

class BotsPage extends React.Component {

    state = {
      bots: [],
      botsInArmy: []
    }

    componentDidMount(){
        fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
        .then(res=>res.json())
        .then(bots => {
          const updatedBots = bots.map(bot => ({...bot, inArmy: false}))
          this.setState({
            bots: updatedBots
          })
        })
    }

    addArmyBot = (clickedBot) => {

      // this.state.botsInArmy.includes(clickedBot) ?
      // null
      // :
      // this.setState(prevState => ({
      //   botsInArmy: [...prevState.botsInArmy, clickedBot]
      // }))
      const updateBots = this.state.bots.map(bot => {
        if(bot === clickedBot){
        return {...bot, inArmy: true}
        } else {
        return bot
        }
      })
      this.state.botsInArmy.includes(clickedBot) ?
      null
      :
      this.setState({
        bots: updateBots
      })
    }

    renderArmyBots = () => {
      const armyBots = this.state.bots.filter(bot => bot.inArmy === true)
      return armyBots
    }

    removeArmyBot = (clickedBot) => {
      // const removeBot = this.state.botsInArmy.filter(bot => bot !== clickedBot)
      // this.setState(prevState => ({
      //   botsInArmy: removeBot
      // }))
      const updateBots = this.state.bots.map(bot => {
        if(bot === clickedBot){
        return {...bot, inArmy: false}
        } else {
        return bot
        }
      })
      this.setState(prevState => ({
        bots: updateBots
      }))
    }

  render() {
    console.log();
    return (
      <div>
        < YourBotArmy
        bots={this.renderArmyBots()}
        removeArmyBot={this.removeArmyBot}
        botsInArmy={this.state.botsInArmy}
        />
        < BotCollection
        bots={this.state.bots}
        addArmyBot={this.addArmyBot}
        botsInArmy={this.state.botsInArmy}
        />
      </div>
    );
  }

}

export default BotsPage;
