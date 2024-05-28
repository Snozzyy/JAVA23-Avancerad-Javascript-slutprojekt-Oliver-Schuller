import React, { ChangeEvent } from "react";
import {createTask} from "../utils/ReadWriteTasks.ts"

function CreateTask() {
    let taskAssignment = "";
    let taskCategory = "frontend";

    // Set assignment with value from text input
    function setTaskAssignment(event:React.ChangeEvent<HTMLInputElement>){
        taskAssignment = event.target.value;
    }

    // Set category from select input
    function setCategory(event:ChangeEvent<HTMLSelectElement>){
        taskCategory = event.target.value;
    }

    // Create task in database based on taskAssignment and category
    function handleSubmit(event:ChangeEvent<HTMLFormElement>){
        event.preventDefault();
        createTask(taskAssignment, taskCategory)
        event.target.reset();
    }

    return ( 
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Task" onChange={setTaskAssignment}/>
                <select onChange={setCategory}>
                    <option value="frontend">Frontend</option>
                    <option value="backend">Backend</option>
                    <option value="ux">UX</option>
                </select>
                <button>Create</button>
            </form>
        </>
     );
}

export default CreateTask;