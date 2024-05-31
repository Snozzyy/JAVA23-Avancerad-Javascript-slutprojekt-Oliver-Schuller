import React, { ChangeEvent } from "react";
import { updateAssigned } from "../../utils/updateFirebase";
import ChecklistModal from "../checklist/ChecklistModal";

function TodoCard({task}) {

    const {assignment, category} = task;

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
        <div className={category}>
            <h3>{assignment}</h3>
            <h4>{category}</h4>
            <ChecklistModal task={task}/>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Enter name" onChange={handleChange}/>
                <button>Assign</button>
            </form>
        </div>
     );
}

export default TodoCard;