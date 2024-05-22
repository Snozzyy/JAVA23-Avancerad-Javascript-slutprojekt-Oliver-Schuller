import React from "react";

function TaskCard({taskStatus}: {taskStatus:string}) {

    if (taskStatus == "To Do") {
        return ( 
            <>
                <p>Göra klart TaskList</p>
                <form>
                    <input type="text" placeholder="Enter name"/>
                    <button>Assign</button>
                </form>
            </>
        );
    } else if (taskStatus == "In Progress") {
        return (
            <>
                <p>Göra klart TaskList</p>
                <p>-Oliver</p>
                <button>Done</button>
            </>
        )
    } else if (taskStatus == "Done") {
        return (
            <>
                <p>Göra klart TaskList</p>
                <p>-Oliver</p>
                <button>Remove</button>
            </>
        );
    }
}

export default TaskCard;