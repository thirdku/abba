import React, { Component } from "react";

const ToDoForm = props =>(
    
    <div > 
    <form onSubmit={props.handleSubmit}>
             <input 
             onChange={props.handleChange}
             value={props.currentItem.inputValue}
             />  
             <button type="submit">add</button>
            </form>
            
    </div>
     
    )
    export default ToDoForm;