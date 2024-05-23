import React from "react";

function CreateTask() {
    return ( 
        <>
            <form>
                <input type="text" placeholder="Task"/>
                <select>
                    <option>Frontend</option>
                    <option>Backend</option>
                    <option>UX</option>
                </select>
                <button>Create</button>
            </form>
        </>
     );
}

export default CreateTask;