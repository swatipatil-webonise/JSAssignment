import React from 'react';
import './App.css';

class ListOut extends React.Component {
    render() {
        return(
            <center>
            <table border="1">
                <tr><th>Todo ID</th><th>Todo Name</th><th>Status</th><th>Operations</th></tr>
                {this.props.todoList.map((item, index) => <tr><td>{index+1}</td><td>{item}</td><td>Incomplete</td><td><a href= "">Edit</a></td></tr>)}
            </table>
            </center>
        );
    }
}
export default ListOut;