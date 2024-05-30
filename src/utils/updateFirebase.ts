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
            status: "todo",
            checklist: []
        };
    }
    
    update(assignmentsRef, newTask);
}

export function updateAssigned(task:TaskObject, assignedUser:string){
    task.status = "inProgress";
    task.assigned = assignedUser;
    const taskRef = ref(db, "/assignments/" + task.taskId);
    // taskId should not exist as key in firebase
    delete task.taskId;
    update(taskRef, task);
}

export function changeStatus(task:TaskObject, newStatus:string){
    task.status = newStatus;
    const taskRef = ref(db, "/assignments/" + task.taskId);
    // taskId should not exist as key in firebase
    delete task.taskId;
    update(taskRef, task);
}

export function addToChecklist(checklistTask:string, task:TaskObject){
    const taskRef = ref(db, "/assignments/" + task.taskId);

    // If checklist exist then append new task
    if (task.checklist != null) {
        const keyIndex = Object.keys(task.checklist).length;
        
        const newTask:Object = {
            isDone: false,
            task: checklistTask
        }
        
        task.checklist[keyIndex] = newTask;

        // taskId should not exist as key in firebase
        delete task.taskId;    
        update(taskRef, task);
    
    } else {
        const newTask:Object = {
            0: {
                isDone: false,
                task: checklistTask
            }
        }

        task.checklist = newTask;

        // taskId should not exist as key in firebase
        delete task.taskId;    
        update(taskRef, task);
    } 
}

    export function updateChecklistStatus(taskId:string, taskIndex:number, status:boolean) {
        const checklistRef = ref(db, `/assignments/${taskId}/checklist/${taskIndex}`);

        const newStatus = {
            isDone: !status
        }

        update(checklistRef, newStatus);
        
}