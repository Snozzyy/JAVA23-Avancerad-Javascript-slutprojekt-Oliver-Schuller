export const taskData:Object = {
    task1: {
        "assigned": "enya",
        "assignment": "snygga till sida",
        "category": "ux",
        "status": "todo"
    },

    task2: {
        "assigned": "oliver",
        "assignment": "göra slutprojekt",
        "category": "frontend",
        "status": "inProgress"
    },

    task3: {
        "assigned": "oliver",
        "assignment": "skapa en statisk sida",
        "category": "backend",
        "status": "done"
    }
};

export async function getData(): Promise<Object> {
    const url: string = "https://java23-ajs-slutprojekt-a81e0-default-rtdb.europe-west1.firebasedatabase.app/assignments.json";
    const resp = await fetch(url);
    const data = await resp.json();

    return data;
}