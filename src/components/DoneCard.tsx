import React from "react";

function DoneCard({task}) {

    const category = task.category;
    const assignment = task.assignment;
    const assigned = task.assigned;    

    return (
        <div className={category}>
            <h4>{assignment}</h4>
            <p>-{assigned}</p>
            <button>Remove</button>
        </div>
    );
}

export default DoneCard;