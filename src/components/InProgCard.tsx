import { ref, update } from "firebase/database";
import React from "react";
import { db } from "../utils/firebaseConfig";
import { changeStatus } from "../utils/ReadWriteTasks";

function InProgCard({task}) {

    function handleClick(){
        changeStatus(task, "done");
    }

    return (
        <div className={task.category}>
            <h4>{task.assignment}</h4>
            <p>-{task.assigned}</p>
            <button onClick={handleClick}>Done</button>
        </div>
    );
}

export default InProgCard;