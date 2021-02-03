// your Bomb code here!
import React, { Component } from 'react';

class Bomb extends Component {
    constructor(props) {
        super(props);
        this.state = {
            secondsLeft: props.initialCount
        }
    }

    timer = () => {
        if (this.state.secondsLeft === 0) {
            return <h1>Boom!</h1>
        } else {
            return <h1>{this.state.secondsLeft} seconds left before I go boom!</h1>
        }
    }

    render() { 
        return ( 
            <div>
                {this.timer()}
            </div>
         );
    }
}
 
export default Bomb;