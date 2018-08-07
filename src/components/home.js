import React, { Component } from 'react';

import Header from './header';
import Card from './card';

class Home extends Component {
  render() {
    return (
      <div className="home">
        { Header('Bottega Madlibs', 'Fill out the fields and push Generate Madlib to create your very own madlib!') }
        <Card />
      </div>
    );
  }
} 

export default Home;
