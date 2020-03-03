import React, { Component } from "react";


const ToDoList = props =>(
<div > 
<ul>
{props.text.map( (item)=> (
<li key={item.id}>
    {item.inputValue} 
<button onClick={() => props.deleteItem(item.id)}>x</button>
</li>)) } 
</ul>
</div>
 
)

    



export default ToDoList;

