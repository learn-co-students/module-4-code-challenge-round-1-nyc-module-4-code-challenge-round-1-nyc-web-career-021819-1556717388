import React from "react";
import BotCard from "../components/BotCard";
import v4 from 'uuid'

class BotCollection extends React.Component {
	//your code here
	
	renderBots = () => {
		return this.props.bots.map(bot => {
			return <BotCard key={ v4() } army={this.props.army} inCollection={true} addToArmy={this.props.addToArmy} bot={bot}/>
		})
	}

  render(){
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  {this.renderBots()}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
