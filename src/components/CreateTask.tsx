import React from "react";

function CreateTask() {
    return ( 
        <div>
            <form>
                <input type="text" placeholder="Task"/>
                <select>
                    <option>Frontend</option>
                    <option>Backend</option>
                    <option>UX</option>
                </select>
                <button>Create</button>
            </form>
        </div>
     );
}

export default CreateTask;