import React from "react";
import BotCard from "../components/BotCard";


class BotCollection extends React.Component {

  render(){
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
        {this.props.botsList.map(bot =>
        <BotCard
          key={bot.id}
          name={bot.name}
          health={bot.health}
          damage={bot.damage}
          armor={bot.armor}
          bot_class={bot.bot_class}
          catchphrase={bot.catchphrase}
          avatar_url={bot.avatar_url}
          />)}
    		  Collection of all bots
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
