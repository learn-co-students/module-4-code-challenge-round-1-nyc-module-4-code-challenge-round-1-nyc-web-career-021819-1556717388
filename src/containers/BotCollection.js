import React from "react";
import BotCard from "../components/BotCard";
import BotSpecs from '../components/BotSpecs';


class BotCollection extends React.Component {
  //your code here
  state={
    clicked: false,
    clickedBot: ''
  }

  renderBots=()=>{
      return this.props.bots.map(bot=> <BotCard key={bot.id} bot={bot} handleBotClick={this.handleBotClick}
      handleAddtoBotArmy={this.props.handleAddtoBotArmy}/>)
  }

  handleBotClick=(bot)=>{
    this.setState({
      clicked: !this.state.clicked,
      clickedBot: bot
    })
  }

  handleGoBack=()=>{
    this.setState({
      clicked: false
    })
  }




  render(){
    if(this.state.clicked===true){
      return(
        <div className="ui four column grid">
      		<div className="row">
      		 <BotSpecs bot={this.state.clickedBot}
           handleGoBack={this.handleGoBack}
           handleAddtoBotArmy={this.props.handleAddtoBotArmy}/>
      		</div>
    	  </div>
      )
    }else{
      return (
    	  <div className="ui four column grid">
      		<div className="row">
      		  {this.renderBots()}
      		</div>
    	  </div>
    	);
    }
  }

};

export default BotCollection;
