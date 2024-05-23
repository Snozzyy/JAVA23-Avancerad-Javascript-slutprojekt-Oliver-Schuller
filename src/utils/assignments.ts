import { onValue, update, push, ref } from "firebase/database";
import { assignmentsRef } from "./firebase.ts";

export async function getTasks():Promise<Object[]>{
    const url = "https://java23-ajs-slutprojekt-a81e0-default-rtdb.europe-west1.firebasedatabase.app/assignments.json";
    const resp = await fetch(url);
    const data = await resp.json();

    return data;
}