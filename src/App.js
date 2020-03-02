import React from "react";
import ToDoList from "./todolists";
export default class App extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            inputValue : '' , text :[]};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
     handleChange = (event) =>{
     this.setState({ inputValue: event.target.value});
     }
     handleSubmit = (event) => {
        event.preventDefault();
        this.setState({
            inputValue :'',
            text :[...this.state.text, this.state.inputValue]
        });
     }
      
    render(){
        return (<div>
        <h1>To Do List</h1>
             <ToDoList text={this.state.text}/>
             <form onSubmit={this.handleSubmit}>
             <input 
             onChange={this.handleChange}
             value={this.state.inputValue}
             />  
             <button type="submit">add</button>
            </form>
            
        </div>
        
        );
    }
}
