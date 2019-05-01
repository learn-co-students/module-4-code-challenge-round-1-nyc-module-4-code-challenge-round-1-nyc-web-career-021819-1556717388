import React from "react";
import BotCard from "../components/BotCard";
import v4 from 'uuid'


class YourBotArmy extends React.Component {
  //your bot army code here...

  renderBots = () => {
		return this.props.army.map(bot => {
			return <BotCard key={ v4() } army={this.props.army} addToArmy={this.props.addToArmy} bot={bot}/>
		})
	}

  render(){
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {this.renderBots()}
            Your Bot Army
          </div>
        </div>
      </div>
    );
  }
  
};

export default YourBotArmy;
