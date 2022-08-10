import React, { Component } from 'react'

import UpdateTask from '../Modals/updateTask';

const colors = [
    {
        primaryColor : "#5D93E1",
        secondaryColor : "#ECF3FC"
    },
    {
        primaryColor : "#F9D288",
        secondaryColor : "#FEFAF1"
    },
    {
        primaryColor : "#5DC250",
        secondaryColor : "#F2FAF1"
    },
    {
        primaryColor : "#F48687",
        secondaryColor : "#FDF1F1"
    },
    {
        primaryColor : "#B964F7",
        secondaryColor : "#F3F0FD"
    }
]

export default class Card extends Component {
    constructor(props){
        super(props);
        this.state = {
            modal : false
        }
        this.toggleModal = this.toggleModal.bind(this)
    }
    toggleModal = () => {
        this.setState({modal : this.state.modal ^ true})
    }
    render() {
        return (
            <div className="card-wrapper me-5 mb-4">
                <div className="card-top" style={{"backgroundColor": colors[this.props.index % 5].primaryColor}}>
                    <div className="task-holder">
                        <span className="card-header" style={{"backgroundColor" : colors[this.props.index % 5].secondaryColor, "borderRadius" : "10px"}}>{this.props.obj.taskName}</span>
                        <p className="mt-3">{this.props.obj.description}</p>
                        <div style={{"position": "absolute", "right" : "20px", "bottom" : "-160px"}}>
                                <i className = "far fa-edit me-3" style={{"color" : colors[this.props.index%5].primaryColor, "cursor" : "pointer"}} onClick = {() => {this.toggleModal()}}></i>
                                <i className = "fas fa-trash-alt" style = {{"color" : colors[this.props.index%5].primaryColor, "cursor" : "pointer"}} onClick = {() => {this.props.handleDelete(this.props.index)}}></i>                       
                        </div>
                    </div>                    
                </div>
                <UpdateTask modal={this.state.modal} index={this.props.index} obj={this.props.obj} toggleModal={this.toggleModal} taskList={this.props.taskList} /> 
            </div>
        )
    }
}
