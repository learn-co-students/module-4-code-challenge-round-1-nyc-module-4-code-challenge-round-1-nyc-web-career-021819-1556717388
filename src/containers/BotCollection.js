import React from "react";
import BotCard from "../components/BotCard";
import v4 from 'uuid'
import BotSpecs from '../components/BotSpecs'

class BotCollection extends React.Component {
	//your code here

	state = {
		page: "renderBots"
	}
	
	renderBots = () => {
		return this.props.bots.map(bot => {
			return <BotCard key={ v4() } showSpecs={this.showSpecs} army={this.props.army} inCollection={true} addToArmy={this.props.addToArmy} bot={bot}/>
		})
	}

	showBots = () => {
		this.setState({
			page: 'renderBots'
		})
	}

	showSpecs = (bot) => {
    this.setState({
			page: bot.id
		})
	}

	renderBot = () => {
		const bot = this.props.bots.find(bot=> bot.id === this.state.page)
		return <BotSpecs army={this.props.army} inSpecs={true} showBots={this.showBots} addToArmy={this.props.addToArmy} bot={bot} />
	}

  render(){
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
					{this.state.page === "renderBots" ? this.renderBots() : this.renderBot()}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
