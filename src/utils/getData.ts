export async function getData(): Promise<Object> {
    const url: string = "https://java23-ajs-slutprojekt-a81e0-default-rtdb.europe-west1.firebasedatabase.app/assignments.json";
    const resp = await fetch(url);
    const data = await resp.json();
    
    // Lägg till objekt-ID från firebase i objektet
    for (const key in data) {
        data[key].taskId = key
    }

    return data;
}