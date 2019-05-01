import React from 'react';
import BotCard from '../components/BotCard';
import BotSpecs from '../components/BotSpecs';

class BotCollection extends React.Component {
	render() {
		return (
			<div className="ui four column grid">
				<div className="row">
					{this.props.bots.map((bot) => {
						return <BotCard bot={bot} handleClick={this.props.handleClick} />;
					})}
				</div>
				)}
			</div>
		);
	}
}

export default BotCollection;
