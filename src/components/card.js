import React, { Component } from 'react';

import Input from './input';

class Card extends Component {

    constructor() {
        super()

        this.state = {
            color: 'BLUE',
            pluralNoun: '',
        }

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        console.log('this is the value', event.target.value)
        this.setState({ color: event.target.value })
    }

    render() {

        return(
            <div className="card">
                <h1>{this.state.color}</h1>
                <input value={this.state.color} onChange = {(event) => this.handleInputChange(event)}/>
            </div>
        )

        return (
            <div className="card">
                { Input(this.state.color) }
                { Input('Second Title') }
            </div> 
        )
    }
}

export default Card;