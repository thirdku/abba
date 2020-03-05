import React, { Component } from "react";
import { Draggable } from "react-beautiful-dnd";


const ToDoList = props =>(

<div > 
<Draggable>
    {(provided) =>(
<ul {...provided.dragHandleProps} {...provided.draggableProps} innerRef={provided.innerRef}>
{props.text.map( (item,index)=> (
<li key={id} index={index}>
    {item.inputValue} 
<button onClick={() => props.deleteItem(id)}>x</button>
</li>)) } 
</ul>
)}
</Draggable>
</div>
 
)

    



export default ToDoList;