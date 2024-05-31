import React, { useEffect, useRef, useState } from "react";
import TaskList from "./TaskList";
import { assignmentsRef } from "../utils/firebaseConfig.ts";
import { onValue } from "firebase/database";


function TaskContainer() {
    
    const [tasks, setTasks] = useState({});
    const [isError, setIsError] = useState(false)

    useEffect(() => {
        // onValue updates site in realtime
        onValue(assignmentsRef, (snapshot) => {
            try {
                const tasksData = snapshot.val();
                // Add taskId as a key to object
                for (const key in tasksData) {
                    tasksData[key].taskId = key
                }
                setTasks(tasksData);
                
            } catch (error) {
                console.log(error);
                alert("Something went wrong, please try again later!")
            }
        })
    }, [])
    
    return ( 
        <>
            {isError && <h1>Something went wrong, please try again later</h1>}
            <TaskList title="To Do" assignments={tasks} status="todo"/>
            <TaskList title="In Progress" assignments={tasks} status="inProgress"/>
            <TaskList title="Done" assignments={tasks} status="done"/>
        </>
     );
}

export default TaskContainer;