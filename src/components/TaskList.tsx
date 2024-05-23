import React, { useEffect, useRef } from "react";
import TaskCard from "./TaskCard";
import { onValue } from "firebase/database";
import { assignmentsRef } from "../utils/firebase";
import { TaskProps } from "../utils/interfaces";
import { getTasks } from "../utils/assignments";



function TaskList({title, assignments}: TaskProps) { 

    return ( 
        <div>
            <h1>{title}</h1>
            {assignments.map((task) => {                
                return <TaskCard title={title} assignments={task}/>
            })}

        </div>
     );
}

export default TaskList;