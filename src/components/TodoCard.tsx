import React, { ChangeEvent } from "react";
import { updateAssigned } from "../utils/ReadWriteTasks";

function TodoCard({task}) {

    let assignedUser = "";

    // Get assigned user
    function handleChange(event:ChangeEvent<HTMLInputElement>){
        assignedUser = event.target.value;
    }

    // Update task based on assigned user
    function handleSubmit(event:ChangeEvent<HTMLFormElement>){
        event.preventDefault();
        updateAssigned(task, assignedUser);
        event.target.reset();
    }

    return ( 
        <div className={task.category}>
            <h4>{task.assignment}</h4>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Enter name" onChange={handleChange}/>
                <button>Assign</button>
            </form>
        </div>
     );
}

export default TodoCard;