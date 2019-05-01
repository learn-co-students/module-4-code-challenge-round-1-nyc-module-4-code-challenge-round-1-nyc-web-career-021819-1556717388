import React from "react";
import BotCollection from './BotCollection';
import YourBotArmy from './YourBotArmy'


class BotsPage extends React.Component {
  //start here with your code for step one
  state={
    bots: [],
    botArmy: []
  }

  getBots(){
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
    .then(res=>res.json())
    .then(data => {
      let newbots = data.map(bot => {
        return {...bot, myArmy: false}
      })
        this.setState({
          bots: newbots
        })
    }
    )
  }

  componentDidMount(){
    this.getBots()
  }

  handleAddtoBotArmy=(bot)=>{
    let clicked = this.state.bots.find(b => b.id === bot.id);
    this.state.bots.map(b => {
      if(b===clicked){
        return b.myArmy=true
      } else {
        return b
      }
    });
    let updateBotArmy = this.state.bots.filter( b => b.myArmy===true);
    this.setState({
      botArmy: updateBotArmy
    })
  }

  // myArmy=()=>{
  //   let updateBotArmy = this.state.bots.filter( b => b.myArmy===true);
  //   console.log(updateBotArmy);
  // }


  render() {
    // console.log(this.state.botArmy);
    // if(this.state.botArmy === []){
    //   return (
    //   <div>
    //     <BotCollection bots={this.state.bots}
    //     handleAddtoBotArmy={this.handleAddtoBotArmy}/>
    //   </div>
    // );}else{
      return (
        <div>
          <YourBotArmy botArmy={this.state.botArmy}/>
          <BotCollection bots={this.state.bots}
          handleAddtoBotArmy={this.handleAddtoBotArmy}/>
        </div>
      )
    // }
  }

}

export default BotsPage;
