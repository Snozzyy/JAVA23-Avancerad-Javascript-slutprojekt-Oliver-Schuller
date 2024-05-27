import React from "react";

function TodoCard({task}) {

    const assignment = task.assignment;
    const category  = task.category;

    return ( 
        <div className={category}>
            <h4>{assignment}</h4>
            <form>
                <input type="text" placeholder="Enter name"/>
                <button>Assign</button>
            </form>
        </div>
     );
}

export default TodoCard;