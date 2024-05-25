import React from "react";
import { TaskProps } from "../utils/typescript";

function TaskCard({assignments}: TaskProps) {
    
    const assigned:string = assignments.assigned;
    const assignment:string = assignments.assignment;
    const category:string = assignments.category;
    const taskStatus:string = assignments.status;

    
    // snygga till
    if (taskStatus == "todo") {
        return ( 
            <div className={category}>
                <h4>{assignment}</h4>
                <form>
                    <input type="text" placeholder="Enter name"/>
                    <button>Assign</button>
                </form>
            </div>
        );
        
    } else if (taskStatus == "inProgress") {
        return (
            <div className={category}>
                <h4>{assignment}</h4>
                <p>-{assigned}</p>
                <button>Done</button>
            </div>
        );

    } else if (taskStatus == "done") {
        return (
            <div className={category}>
                <h4>{assignment}</h4>
                <p>-{assigned}</p>
                <button>Remove</button>
            </div>
        );
    }
}

export default TaskCard;