import React from "react";
import TaskCard from "./TaskCard";

function TaskList({listType}: {listType:string}) {

    return ( 
        <div>
            <h1>{listType}</h1>
            <TaskCard taskStatus={listType}/>
        </div>
     );
}

export default TaskList;