import { Component } from "react";
import Color from "./Color";

class Users extends Component{
    constructor(props){
        super();
        this.state = {
            record : props.users,
            color : ["I", "N" , "D"]
        }
    }

    render(){
        return(
            <div>
                <h1>Users Component</h1>
                <table border={1}>
                    <thead>
                        <tr>
                            <td>sr. no</td>
                            <td>Name</td>
                            <td>Phone</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.record.map((val , index) => {
                                const { name , phone} = val;
                                return (
                                    <tr>
                                        <td>{++index}</td>
                                        <td>{name}</td>
                                        <td>{phone}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
                <Color color = {this.state.color}/>
            </div>
        )
    }
}

export default Users