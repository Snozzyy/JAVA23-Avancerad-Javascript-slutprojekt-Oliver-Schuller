import { ref, update } from "firebase/database";
import React from "react";
import { db } from "../../utils/firebaseConfig.ts";
import { changeStatus } from "../../utils/updateFirebase.ts";
import ChecklistModal from "../checklist/ChecklistModal.tsx";

function InProgCard({task}) {

    const {assignment, assigned, category} = task;

    function handleClick(){
        changeStatus(task, "done");
    }

    return (
        <div className={category}>
            <h3>{assignment}</h3>
            <h4>{category}</h4>
            <p>-{assigned}</p>
            <ChecklistModal task={task}/>
            <button onClick={handleClick}>Done</button>
        </div>
    );
}

export default InProgCard;