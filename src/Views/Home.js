import React, { Component } from 'react';
import Header from '../Components/Header';

class Home extends Component {

   render () {                                   
      return (
        <div>
          <Header />
          <main className="wrapper">
                <ul className="maps">
                <li>Test</li>
                <li>Test</li>
                <li>Test</li>
                  {/*<h2>Filters</h2>
                  
                    Object
                    .keys(this.state.markers)
                    .map(key => <Explore key={key} details={this.state.markers[key]} />)
                  */}
                </ul>
            </main>
        </div>
      )
   }
}

export default Home;