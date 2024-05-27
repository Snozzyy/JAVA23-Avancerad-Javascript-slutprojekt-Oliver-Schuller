import React, { useEffect, useRef, useState } from "react";
import TaskList from "./TaskList";
import { endAt, get, onValue } from "firebase/database";
import { assignmentsRef } from "../utils/firebase";
import { getTasks } from "../utils/assignments";
import { getData } from "../utils/getData";


function TaskContainer() {

    const [task, setTask] = useState({});

    useEffect(() => {
        getData().then(data => {
            setTask(data);
        })        
    }, [])

    return ( 
        <>
            <TaskList title="To Do" assignments={task} status="todo"/>
            <TaskList title="In Progress" assignments={task} status="inProgress"/>
            <TaskList title="Done" assignments={task} status="done"/>
        </>
     );
}

export default TaskContainer;