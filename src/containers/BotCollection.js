import React from "react";
import BotCard from "../components/BotCard";
import BotSpecs from "../components/BotSpecs";

class BotCollection extends React.Component {
  //your code here

  //creating state to see decide to show botcard of spec
  state = {
    toggle: false,
    toggledBot: {}
  }

  //event handler
  toggleCard = () => {
    this.setState((prevState) => ({
      toggle: !prevState.toggle
    }))
  }

  //map through the bots array being passed down
  renderAllBots = () => {
    return this.props.bots.map(bot => {
      return <BotCard key={bot.id} bot={bot} enlist={this.props.enlist} toggleCard={this.toggleCard} findTheBot={this.findTheBot}/>
    })
  }

  renderSpecCard = () => {
      return <BotSpecs key={this.state.toggledBot.id} bot={this.state.toggledBot} enlist={this.props.enlist} toggleCard={this.toggleCard} clearFoundBot={this.clearFoundBot}/>
  }

  findTheBot = (botObj) => {
    const clickedBot = this.props.bots.find(bot => {
       return bot === botObj
      })
      this.setState({
        toggledBot: clickedBot
      })
  }

  clearFoundBot = () => {
    this.setState ({
      toggledBot: {},
      toggle: false
    })
  }

  render(){
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
        {this.state.toggle === false ?  this.renderAllBots() : this.renderSpecCard()}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
