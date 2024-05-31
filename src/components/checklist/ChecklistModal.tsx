import React, { ChangeEvent, useState } from "react";
import "../../css/modal.css"
import { ChecklistObject, TaskObject } from "../../utils/typescript";
import { addToChecklist } from "../../utils/updateFirebase";
import ChecklistForm from "./ChecklistForm";
import ChecklistElement from "./ChecklistElement";
import ProgressBar from "./ProgressBar";

function ChecklistModal({task}) {
    const {assignment, taskId, checklist} = task;
    const [modal, setModal] = useState(false);
    let taskArr:ChecklistObject[] = [];

    for (const key in checklist) {
        taskArr.push(checklist[key]);
    }

    function toggleModal() {
        setModal(!modal)
    }
    
    return ( 
        <>
            <button className="btn-modal" onClick={toggleModal}>Checklist</button>
            {modal && (
                <div className="modal">
                    <div className="overlay">
                        <div className="modal-content">
                            <h2>{assignment}</h2>
                            
                            {taskArr.map((checkListTask, i) => {
                                return (
                                    <ChecklistElement task={checkListTask} taskId={taskId} taskIndex={i} key={i}/>
                                )
                            })}

                            {/* Only display progress bar when checklist exist */}
                            {taskArr.length > 0 && 
                                <ProgressBar tasks={checklist}/>
                            }

                            <ChecklistForm task={task}/>
                            <button onClick={toggleModal}>Close</button>
                        </div>
                    </div>
                </div>
            )}
        </>
     );
}

export default ChecklistModal;