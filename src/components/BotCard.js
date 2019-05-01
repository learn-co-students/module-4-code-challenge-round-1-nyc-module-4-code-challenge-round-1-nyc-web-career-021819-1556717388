import React from "react";

const BotCard = props => {
  const { bot } = props;


  let botType;
  switch (bot.bot_class) {
    case "Assault":
      botType = <i className="icon military" />;
      break;
    case "Defender":
      botType = <i className="icon shield" />;
      break;
    case "Support":
      botType = <i className="icon ambulance" />;
      break;
    default:
      botType = <div />;
  }



  return (
    <div className="ui column">
      <div
        className="ui card"
        key={bot.id}
      >
        <div className="image">
          <img alt="oh no!" src={bot.avatar_url} onClick={()=>props.handleAddtoBotArmy(bot)}/>
        </div>
        <div className="content">
          <div className="header">
            {bot.name}
          </div>

          <div className="meta text-wrap" onClick={() =>props.handleBotClick(bot)}>
            <small>{bot.catchphrase}</small>
          </div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat" />
            {bot.health} {botType}
          </span>

          <span>
            <i className="icon lightning" />
            {bot.damage}
          </span>
          <span>
            <i className="icon shield" />
            {bot.armor}
          </span>
        </div>
      </div>
    </div>
  );

};

export default BotCard;
