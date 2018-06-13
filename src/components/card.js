import React, { Component } from 'react';

import Input from './input';

class Card extends Component {
    render() {
        return (
            <div className="card">
                { Input('Super Cool Title') }
                { Input('Second Title') }
            </div> 
        )
    }
}

export default Card;