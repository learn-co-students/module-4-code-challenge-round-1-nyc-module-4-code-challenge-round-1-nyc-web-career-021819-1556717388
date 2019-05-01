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

      this.state.botsInArmy.includes(clickedBot) ?
      null
      :
      this.setState(prevState => ({
        botsInArmy: [...prevState.botsInArmy, clickedBot]
      }))
      // const updateBots = this.state.bots.map(bot => {
      //   if(bot === clickedBot){
      //   return {...bot, inArmy: true}
      //   } else {
      //   return bot
      //   }
      // })
    }

    // renderArmyBots = () => {
    //   const armyBots = this.state.bots.filter(bot => bot.inArmy === true)
    // }

    removeArmyBot = (clickedBot) => {
      const removeBot = this.state.botsInArmy.filter(bot => bot !== clickedBot)
      this.setState(prevState => ({
        botsInArmy: removeBot
      }))
      // const updateBots = this.state.bots.map(bot => {
      //   if(bot === clickedBot){
      //   return {...bot, inArmy: false}
      //   } else {
      //   return bot
      //   }
      // })
    }

  render() {
    return (
      <div>
        < YourBotArmy
        bots={this.state.botsInArmy}
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
