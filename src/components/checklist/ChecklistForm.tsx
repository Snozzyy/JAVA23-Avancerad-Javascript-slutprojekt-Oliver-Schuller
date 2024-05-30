import React, { ChangeEvent } from "react";
import { addToChecklist } from "../../utils/updateFirebase";

function ChecklistForm({task}) {

    let checklistTask:string = "";

    function setChecklistTask(event:React.ChangeEvent<HTMLInputElement>){
        checklistTask = event.target.value;
    }

    function handleSubmit(event:ChangeEvent<HTMLFormElement>){
        event.preventDefault();
        addToChecklist(checklistTask, task);
        event.target.reset();
    }

    return ( 
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Create task" onChange={setChecklistTask}/>
                <button>Create</button>
            </form>
        </>
     );
}

export default ChecklistForm;