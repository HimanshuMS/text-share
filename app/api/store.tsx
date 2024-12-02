// /app/api/store.ts
// A simple in-memory store for text

interface Store {
    [key: string]: string; // Maps IDs to text
  }
  
  const textStore: Store = {};
  
  export function saveText(id: string, text: string) {
    textStore[id] = text;
  }
  
  export function getText(id: string) {
    return textStore[id] || null;
  }
  
  export function deleteText(id: string) {
    delete textStore[id];
  }
  
  export function textExists(id: string) {
    return textStore.hasOwnProperty(id);
  }
  