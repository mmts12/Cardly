import React, { Component } from 'react';
import { utilService } from '../../../services/misc/utilService.js';
import LibraryAddCheckOutlinedIcon from '@material-ui/icons/LibraryAddCheckOutlined';
import DeleteIcon from '@material-ui/icons/Delete';


export class CardChecklist extends Component {

    state = {
        show: false,
        newTodo: '',
        todos: []
    }

    componentDidMount() {
        let todos = []
        this.props.checklists.map(todoList => {
            todos.push(todoList)
        })
        this.setState({ todos })
    }

    toggleAddItem() {
        let { show } = this.state
        show = !show
        this.setState({ show })
    }

    handleInput = (ev) => {
        let { newTodo } = this.state
        newTodo = ev.target.value
        this.setState({ newTodo })
    }

    addTodo = (currChecklist) => {
        currChecklist.todos.push({ id: utilService.makeId(), txt: this.state.newTodo, isDone: false, createdAt: Date.now() })
        this.setState(this.state.todos = currChecklist.todos)
    }

    render() {
        const { checklists } = this.props
        const { show } = this.state
        return (<div>
            {checklists.map(checklist => {
                return <section key={checklist.id} className="checklist">
                    <div className="flex space-between">
                        <div className="cl-subtitle flex column">
                            <LibraryAddCheckOutlinedIcon />
                            <h3 className="cl-subtitle-txt flex align-center"> {checklist.title}</h3>
                        </div>
                        {checklist.todos.map(todo => {
                            return <div key={todo.id} className="todo-row flex space-between">
                                <div>
                                    <input type="checkbox" ></input>
                                    <span>{todo.txt}</span>
                                </div>
                                <DeleteIcon className="todo-delete-icon"></DeleteIcon>
                            </div>
                        })}
                        <button onClick={() => this.toggleAddItem()} >Add an Item</button>
                        {show && <div>
                            <input onChange={this.handleInput} placeholder="Add an item" ></input>
                            <button onClick={() => this.addTodo(checklist)}>Add</button>
                        </div>
                        }
                    </div>
                </section>

            })}
        </div>
        )
    }
}





