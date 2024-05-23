import React from "react";
import { TaskProps } from "../utils/interfaces";

function TaskCard({assignments}: TaskProps) {
    
    const assigned:string = assignments.assigned;
    const assignment:string = assignments.assignment;
    const category:string = assignments.category;
    const status:string = assignments.status;

    
    // snygga till
    if (status == "todo") {
        return ( 
            <>
                <h4>{assignment}</h4>
                <form>
                    <input type="text" placeholder="Enter name"/>
                    <button>Assign</button>
                </form>
            </>
        );
        
    } else if (status == "inProgress") {
        return (
            <>
                <h4>{assignment}</h4>
                <p>-Oliver</p>
                <button>Done</button>
            </>
        )
    } else if (status == "done") {
        return (
            <>
                <h4>{assignment}</h4>
                <p>-Oliver</p>
                <button>Remove</button>
            </>
        );
    }
}

export default TaskCard;