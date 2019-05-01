import React from 'react'

export default class Filter extends React.Component {

    render() {
        return (
            <form>
                <input onChange={this.props.handleChange} type="text" name="firstname"/>
            </form>
        )

    }
}