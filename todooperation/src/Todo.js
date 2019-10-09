import React from "react";
import { AddTodo } from "./AddTodo";
import { ListTodo } from "./ListTodo";
import axios from "axios";

export class Todo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            desc: "",
            todos: []
        };
        this.id = 0;
        this.isUpdate = false;
        this.tempId = 0;
    }

    componentDidMount() {
        axios({
            method: "get",
            url: "http://localhost:5000/todos"
        }).then((response) => {
            this.setState({
                todos: response.data
            })
        }).catch((err) => {
            console.error(err);
        })
    }

    onUserType = event => {
        let value = event.target.value;
        this.setState({
            desc: value
        });
    };

    onAddTodo = () => {
        if (this.state.isUpdate) {
            let desc = this.state.desc;
            axios({
                method: "post",
                url: "http://localhost:5000/todos",
                data: {
                    desc: desc
                }
            }).then((response) => {
                let t = this.state.todos;
                for (let i = 0; i < t.length; i++) {
                    if (t[i].id == this.state.tempId) {
                        t[i].desc = this.state.desc;
                    }
                }
                this.setState({
                    todos: t,
                })
                this.state.desc = "";
            }).catch((err) => {
                console.error(err);
            })
            // let t = this.state.todos;
            // for (let i = 0; i < t.length; i++) {
            //     if (t[i].id == this.state.tempId) {
            //         t[i].desc = this.state.desc;
            //     }
            // }
            // this.setState({
            //     todos: t,
            // })
            // this.state.desc = "";
            
        } else {
            let desc = this.state.desc;
            axios({
                method: "post",
                url: "http://localhost:5000/todos",
                data: {
                    desc: desc
                }
            }).then((response) => {
                let todo = response.data;
                let todos = [...this.state.todos, todo];
                this.setState({
                    desc: "",
                    todos: todos
                });
            }).catch((err) => {
                console.error(err);
            })

            //  let todo = {
            //      desc: this.state.desc,
            //      id: this.id++
            //  }
            //  let todos = [...this.state.todos, todo];
            //  this.setState({
            //      desc: "",
            //      todos: todos
            //  });
        }
    }

    onDelete = (id) => {
        // let todos = this.state.todos.filter((todo) => todo.id !== id);
        // this.setState({
        //     todos: todos
        // })

        axios({
            method: "post",
            url: "http://localhost:5000/todos",
        }).then((response) => {
            let todos = this.state.todos.filter((todo) => todo.id !== id);
            console.log(response.data);
            this.setState({
                todos: todos
            });
        }).catch((err) => {
            console.error(err);
        })
    }

    onEdit = (value, id) => {
        this.setState({
            desc: value
        });
        this.state.isUpdate = true;
        this.state.tempId = id;
    }

    render() {
        return (
            <div>
                <center><br></br>
                    <h1>Welcome to our todo app...</h1><br></br>
                    <AddTodo desc={this.state.desc} onUserType={this.onUserType} onAddTodo={this.onAddTodo} /><br></br><br></br>
                    <ListTodo todos={this.state.todos} onDelete={this.onDelete} onEdit={this.onEdit} />
                </center>
            </div>
        );
    }
}
