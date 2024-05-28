import { ref, remove } from "firebase/database";
import React from "react";
import { db } from "../utils/firebaseConfig";

function DoneCard({task}) {
    
    function handleClick(){
        const taskRef = ref(db, "/assignments/" + task.taskId);
        remove(taskRef);
    }

    return (
        <div className={task.category}>
            <h4>{task.assignment}</h4>
            <p>-{task.assigned}</p>
            <button onClick={handleClick}>Remove</button>
        </div>
    );
}

export default DoneCard;