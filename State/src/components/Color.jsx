import { Component } from "react";

class Color extends Component {
    constructor(props){
        super();
        this.state = {
            clr :props.color,
            color : ["orange" , "yellow" , "green"]
        }
    }

    render(){
        return (
            <div>
                <h1>Color Component</h1>
                {
                    this.state.clr.map((val,index) => {
                        return (
                            <span style={{backgroundColor : this.state.color[index++]}}>{val}</span>
                        )
                    })
                }
            </div>
        )
    }
}

export default Color