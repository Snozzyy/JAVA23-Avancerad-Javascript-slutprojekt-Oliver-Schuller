import React from "react";
import CreateTask from "./CreateTask";
import TaskList from "./TaskList";

export function App(){
    return (
        <>
            <CreateTask/>
            <TaskList listType="To Do"/>
            <TaskList listType="In Progress"/>
            <TaskList listType="Done"/>
        </>
    );
}