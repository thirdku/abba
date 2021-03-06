import React from "react";
import ToDoList from "./todolists";
import ToDoForm from "./todoform";
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

export default class App extends React.Component{
    constructor(props){
        super(props);
        this.state ={
         currentItem:{ 
             inputValue : '',
             key: ''
            }, 
             text :[]};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }
     handleChange = (event) =>{
     this.setState({ 
        currentItem:{ 
    inputValue:event.target.value,
    key:Date.now()}
        });
     }
     handleSubmit = (event) => {
        event.preventDefault();
        const newItem = this.state.currentItem;
        this.setState({
            text :[...this.state.text, newItem],
            currentItem:{ 
                inputValue : '',
                key: ''
               },
        });
          
     }
     deleteItem = (props)=> {
            this.state.text.splice(props, 1)
            this.setState({text: this.state.text})
           
        }
     onDragend = result =>{};
      
    render(){
        return (
        <DragDropContext onDragend={this.onDragend}>
        <div>
        <h1>To Do List</h1>
             
             <Droppable droppableId={id}>
            {provided =>(
             <ToDoList text={this.state.text} 
             deleteItem= {this.deleteItem}
             innerRef ={provided.innerRef}
             {...provided.droppableProps}
             > {provided.placeholder}
             </ToDoList>
            )}
             </Droppable>
                 
            <ToDoForm handleSubmit={this.handleSubmit}
            handleChange={this.handleChange}
            currentItem={this.state.currentItem}
            inputValue={this.state.currentItem.inputValue}/>
        </div>
        </DragDropContext>
        );
    }
}