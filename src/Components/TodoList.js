import React, { Component } from 'react'

import CreateTask from '../Modals/createTask'
import Card from './Card'

export default class TodoList extends Component {
    _isMounted = false;
    constructor(props){
        super(props);
        this.state = {
            modal: false,
            taskList: JSON.parse(localStorage.getItem('taskList')) || []
        }
        this.addTaskItem = this.addTaskItem.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.handleCreate = this.handleCreate.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    componentDidMount(){
        this._isMounted = true;
        window.addEventListener('storage', (e) => {this.addTaskItem(e)});
    }
    componentWillMount(){
        this._isMounted = false;
    }
    addTaskItem = (e) => {
        if(e.key === 'taskList'){
            this.setState({taskList : JSON.parse(e.newValue)})
            console.log(this.state.taskList);
        }
    }
    toggleModal = () => {
        this.setState({modal: this.state.modal ^ true})
    }
    handleCreate = (e) => {
        let obj = {}
        obj["taskName"] = e.taskName;
        obj["description"] = e.description;
        this.setState({taskList : [...this.state.taskList, obj]}, () => {
            localStorage.setItem('taskList', JSON.stringify(this.state.taskList))
        });
        
    }
    handleDelete = (index) => {
        this.state.taskList.splice(index, 1);
        localStorage.setItem('taskList', JSON.stringify(this.state.taskList));
        window.location.reload();
    }
    render() {
        return (
           <>
                <div className="header text-center">
                    <h3 className="">Todo List</h3>
                    <button className='btn btn-primary mt-2' onClick={this.toggleModal}>Create Task</button>
                </div>
                <div className="task-container">
                    {this.state.taskList && this.state.taskList.map((e, index) => <Card obj={e} index={index} key={index} handleDelete={this.handleDelete} taskList={this.state.taskList}/>)}
                </div>
                <CreateTask toggleModal={this.toggleModal} modal={this.state.modal} handleCreate={this.handleCreate}/>
           </>
        )
    }
}
