import React, { Component } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'

export default class CreateTask extends Component {
    constructor(props){
        super(props);
        this.state = {
            taskName: '',
            description: ''
        }
        this.setTaskName = this.setTaskName.bind(this);
        this.setDescriptionName = this.setDescriptionName.bind(this);
    }
    setTaskName = (e) => {
        this.setState({taskName : e.target.value});
    }
    setDescriptionName = (e) => {
        this.setState({description : e.target.value});
    }
    render() {
        return (
            <>
            <Modal isOpen={this.props.modal ? true : false} toggle={this.props.toggleModal} >
                <ModalHeader toggle={this.props.toggleModal}>Create Task</ModalHeader>
                <ModalBody>
                    <form action="">
                        <div className="form-group">
                            <label htmlFor="task-name" className="mb-2">Task Name</label>
                            <input type="text" className="form-control" onChange={this.setTaskName}/>
                        </div>
                        <div className="form-group mt-3">
                            <label htmlFor="description" className="mb-2">Description</label>
                            <textarea name="description" id="description" cols="30" rows="5" className="form-control" onChange={this.setDescriptionName}></textarea>
                        </div>
                    </form>
                </ModalBody>
                <ModalFooter>
                <Button color="primary" onClick={() => {
                    this.props.toggleModal();
                    this.props.handleCreate(this.state);
                    this.setState({description : ''})
                    this.setState({taskName : ''})
                    
                }}>Create</Button>
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
