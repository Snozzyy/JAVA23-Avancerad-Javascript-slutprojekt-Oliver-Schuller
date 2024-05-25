import React, { useEffect, useRef, useState } from "react";
import TaskList from "./TaskList";
import { get, onValue } from "firebase/database";
import { assignmentsRef } from "../utils/firebase";
import { getTasks } from "../utils/assignments";
import { getData, taskData } from "../utils/getData";


function TaskContainer() {

    const [todoArr, setTodoArr] = useState<Object>([]);
    const [inProgressArr, setInProgressArr] = useState<Object[]>([]);
    const [doneArr, setDoneArr] = useState<Object>([]);
    const [test, setTest] = useState({})

    useEffect(() => {
        getData().then(data =>{
            for (const key in data){
                setTest(data[key]);
                console.log(test);
            }
        })        
    }, [])

    return ( 
        <>
            <TaskList title="To Do" assignments={todoArr}/>
            <TaskList title="In Progress" assignments={inProgressArr}/>
            <TaskList title="Done" assignments={doneArr}/>
        </>
     );
}

export default TaskContainer;