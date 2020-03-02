import React, { Component } from "react";


const ToDoList = props =>(
<div> 
<ul>
{props.text.map( (item,id)=> (<li key={id}>{item}</li>)) } 
</ul>
</div>
 
)

    



export default ToDoList;

