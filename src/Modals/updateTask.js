import React, { Component } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'


export default class CreateTask extends Component {
    constructor(props){
        super(props);
        this.state = {
            taskname : '',
            description : ''
        }
        this.setTaskName = this.setTaskName.bind(this)
        this.setDescriptionName = this.setDescriptionName.bind(this)
        this.handleUpdate = this.handleUpdate.bind(this)
    }
    componentDidMount(){
        this.setState({taskname : this.props.obj.taskName}) 
        this.setState({description : this.props.obj.description}) 
    }
    
    setTaskName = (e) => {
        e.preventDefault();
        this.setState({taskname : e.target.value })
    }
    setDescriptionName = (e) => {
        e.preventDefault();
        this.setState({description : e.target.value})
    }
    handleUpdate = () => {
        console.log(this.props.taskList);
        let temList = this.props.taskList;
        let obj = {}
        obj['taskName'] = this.state.taskname
        obj['description'] = this.state.description;
        temList[this.props.index] = obj;
        console.log(this.props.taskList);
        localStorage.setItem('taskList', JSON.stringify(temList));
        window.location.reload()
    }
    render() {
        return (
            <>
            <Modal isOpen={this.props.modal ? true : false} toggle={this.props.toggleModal} >
                <ModalHeader toggle={this.props.toggleModal}>Update Task</ModalHeader>
                <ModalBody>
                    <form action="">
                        <div className="form-group">
                            <label htmlFor="task-name" className="mb-2">Task Name</label>
                            <input type="text" className="form-control" value={this.state.taskname} onChange={this.setTaskName}/>
                        </div>
                        <div className="form-group mt-3">
                            <label htmlFor="description" className="mb-2">Description</label>
                            <textarea name="description" id="description" cols="30" rows="5" className="form-control" value={this.state.description} onChange={this.setDescriptionName}></textarea>
                        </div>
                    </form>
                </ModalBody>
                <ModalFooter>
                <Button color="primary" onClick={() => {
                    this.props.toggleModal();
                    this.handleUpdate();
                }}>Update</Button>
                {' '}
                <Button onClick={this.props.toggleModal}>
                    Cancel
                </Button>
                </ModalFooter>
            </Modal>
          </>
        )
    }
}
