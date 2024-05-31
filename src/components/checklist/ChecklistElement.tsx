import React, { useState } from "react";
import { ChecklistProps } from "../../utils/typescript";
import { updateChecklistStatus } from "../../utils/updateFirebase";


function Checklist({task, taskId, taskIndex}:ChecklistProps) {

    const {isDone} = task
    const [done, setDone] = useState(isDone);

    // Switch status on task
    function handleChange(){
        updateChecklistStatus(taskId, taskIndex, done)
        setDone(!done)
    }

    return ( 
        <div>
            <input type="checkbox" checked={done} onChange={handleChange}/>
            {task.task + " "}
        </div>
     );
}

export default Checklist; 