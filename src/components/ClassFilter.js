import React, {Component} from 'react'

export default class ClassFilter extends Component {

    state = {value: "All"}

    handleChange = (event) => {
        event.persist()
        this.setState({value: event.target.value})
        this.props.handleSelect(event)
    }
    
    render() {
        return(
        <form onSubmit={this.handleSubmit}>
            <label>
            Filter Army by Class:
            <select value={this.state.value} onChange={this.handleChange}>
                <option value="All">All</option>
                <option value="Assault">Assault</option>
                <option value="Defender">Defender</option>
                <option value="Support">Support</option>
            </select>
            </label>
        </form>
        )
    }
}