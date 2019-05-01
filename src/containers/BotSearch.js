import React from 'react'

class BotSearch extends React.Component {

  state = {
    value: ''
  }

  handleChange = (e) => {
    this.setState({
      value: e.target.value
    })
    this.props.onSearchChange(e.target.value)
  }

  render() {
    console.log(this.state.value);
    return (
      <form>
        Name
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange} />
        <br />
        <br />
      </form>
    );
  }
}

export default BotSearch
