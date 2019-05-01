import React from "react";
import BotCard from "../components/BotCard";
import BotSpecs from '../components/BotSpecs';

class BotCollection extends React.Component {
	//your code here

	render() {
		const { bots, selectedBot } = this.props
		return (
			<div className="ui four column grid">
				<div className="row">
					{selectedBot ? <BotSpecs
						bot={selectedBot}
						handleBack={this.props.handleBack}
						handleEnlist={this.props.handleEnlist} />
						: bots.map(bot => <BotCard bot={bot} key={bot.id} handleBot={this.props.handleBot} />)}
				</div>
			</div>
		);
	}

};

export default BotCollection;
