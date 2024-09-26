import { Component } from "react";

class State extends Component {

    constructor() {
        super();
        this.state = {
            number: 0
        }
    }

    plus() {
        this.setState({
            number: this.state.number + 1
        })
    }

    minus() {
        this.setState({
            number: this.state.number - 1
        })
    }

    double() {
        this.setState({
            number: this.state.number * 2
        })
    }
    reset() {
        this.setState({
            number: 0
        })
    }


    render() {
        return (
            <div align='center'>
                <h1>count : {this.state.number}</h1>
                <button onClick={() => this.plus()}>+</button>

                {
                    this.state.number > 0 ? <button onClick={() => this.minus()}>-</button>
                        : <button disabled onClick={() => this.minus()}>-</button>
                }
                <button onClick={() => this.double()}>double</button>

                {
                    this.state.number == 0 ? <button disabled onClick={() => this.reset()}>zero</button>
                        : <button onClick={() => this.reset()}>zero</button>
                }
            </div>
        )
    }
}

export default State;