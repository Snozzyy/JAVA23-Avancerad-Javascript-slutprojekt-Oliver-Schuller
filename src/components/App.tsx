import React from "react";
import CreateTask from "./CreateTask";
import TaskList from "./TaskList";
import { onValue } from "firebase/database";
import { assignmentsRef } from "../utils/firebase";
import TaskContainer from "./TaskContainer";
import { getData } from "../utils/getData";


export function App(){ 

    getData();
    return (
        <>
            <CreateTask/>
            <TaskContainer/>
        </>
    );
}