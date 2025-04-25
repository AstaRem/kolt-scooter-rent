//Centralizes all storage logic so the rest of the app just talks to these helpers.

const KEY = 'koltScooters';

export function loadAll(){
    const raw = localStorage.getItem(KEY);
    return raw ? JSON.parse(raw) : [];
}

export function saveAll(list){
    localStorage.setItem(KEY, JSON.stringify(list));
}

export function addScooter(scooter){
    const list = loadAll();
    list.push(scooter);
    saveAll(list);
}

export function updateScooter(updated){
    const list = loadAll().map(s => s.id === updated.id ? updated : s);
    saveAll(list);
}

export function removeScooter(id){
    const list =loadAll().filter(s => s.id !== id);
    saveAll(list);
}