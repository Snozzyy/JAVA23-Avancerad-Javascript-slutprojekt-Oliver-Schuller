import { push, update } from "firebase/database";
import React from "react";
import { assignmentsRef } from "../utils/firebase.ts";

function CreateTask() {
    // Flytta ut i egen fil?
    let taskAssignment = "";
    let category = "";

    function setTaskAssignment(event:React.ChangeEvent<HTMLInputElement>){
        taskAssignment = event.target.value;
    }

    function setCategory(event){
        category = event.target.value;
    }

    function handleSubmit(event){
        event.preventDefault();

        const newTask = {};
        const taskId = push(assignmentsRef).key;

        newTask[taskId] = {
            assigned: "",
            assignment: taskAssignment,
            category: category,
            status: "todo" 
        }
        
       console.log(newTask);
       update(assignmentsRef, newTask);

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