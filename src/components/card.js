import React, { Component } from 'react';

import Input from './input';

class Card extends Component {

    constructor() {
        super()

        this.state = {
            color: '',
            pluralNoun: '',
        }
    }

    handleInputChange() {
        this.setState({ color: 'red' })
    }

    render() {

        return(
            <div className="card">
                <h1>{this.state.color}</h1>
                <input/>
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