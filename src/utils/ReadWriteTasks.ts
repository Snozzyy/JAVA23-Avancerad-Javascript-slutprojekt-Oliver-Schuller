import { onValue, push, ref, update } from "firebase/database";
import { assignmentsRef, db } from "./firebaseConfig";
import { TaskObject } from "./typescript";

export function createTask(assignment:string, category:string){
    const newTask:Object = {};
    // Create taskId from firebase
    const taskId:string|null = push(assignmentsRef).key;
    
    // Typescript requires me to check that taskId != null
    if (taskId != null) {
        newTask[taskId] = {
            assigned: "",
            assignment: assignment,
            category: category,
            status: "todo" 
        };
    }
    
    update(assignmentsRef, newTask);
}

export function updateAssigned(task:TaskObject, assignedUser:string){
    task.status = "inProgress";
    task.assigned = assignedUser;
    const taskRef = ref(db, "/assignments/" + task.taskId);
    update(taskRef, task);
}

export function changeStatus(task:TaskObject, newStatus:string){
    task.status = newStatus;
    const taskRef = ref(db, "/assignments/" + task.taskId);
    update(taskRef, task);
}
