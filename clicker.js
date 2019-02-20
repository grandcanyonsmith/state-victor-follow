import React, { Component} from "react";
import Show from './show';

class Clicker extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showComponent: false
        }
        this.onButtonClick = this.onButtonClick.bind(this);
    }

        onButtonClick() {
            this.setState({
                showComponent: !this.state.showComponent
            })
        }

render() {
    return (
        <div>

        <h2> Hello World</h2>  

        <div>
            { this.props.handSomethingDown }
            { this.props.anotherProp }
        </div>
    
        <button onClick={this.onButtonClick}>Click Me to Change the showComponent Value</button>
        {
            this.state.showComponent ? <Show /> : null
        }

        </div>
        )
    }
}

export default Clicker;