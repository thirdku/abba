import React from "react";
import ToDoList from "./todolists";
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
     deleteItem(key){
         const filteredItems = this.state.text.filter(item =>
            item.id!==key);
            this.setState({
                text:filteredItems
            });
     }
      
    render(){
        return (<div>
        <h1>To Do List</h1>
             <ToDoList text={this.state.text} 
             deleteItem= {this.deleteItem}/>
             <form onSubmit={this.handleSubmit}>
             <input 
             onChange={this.handleChange}
             value={this.state.currentItem.inputValue}
             />  
             <button type="submit">add</button>
            </form>
            
        </div>
        
        );
    }
}
