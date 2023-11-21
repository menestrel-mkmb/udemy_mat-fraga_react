import { addedNotification, dupNotification, errorNotification, removedNotification } from "./notifications";

export const lists = {
    favorites: "@favoriteList",
    watchLater: "@toWatchList"
}

export const alreadyOnList = (list, obj) => {
    return list.some(
    (localObj) => localObj.id === obj.id);
}

const noChangedList = (list_in, list_out) => {
    return JSON.stringify(list_in) === JSON.stringify(list_out);
}

export const toggleObjFromList = (string, obj) => {
    let localList = loadParsedListFromLocalStorage(string);
    localList = alreadyOnList(localList, obj) ?
        removeFromList(string, obj) : addToList(string, obj);
    return localList;
};

const addToList = (string, obj) => {
    let notification = "";
    const originalList = loadParsedListFromLocalStorage(string);
    let localList = loadParsedListFromLocalStorage(string);
    
    notification = !alreadyOnList(localList, obj) ? "success" : "duplicate";
    !alreadyOnList(localList, obj) && localList.push(obj);

    if(!noChangedList(originalList, localList))
        localList = saveListToLocalStorage(string, localList);
    if(noChangedList(originalList, localList) && notification !== "duplicate")
        notification = "error";

    notification === "success" ?
            addedNotification() :
            notification === "duplicate" ?
                dupNotification() : errorNotification();
    return localList;
}

const removeFromList = (string, obj) => {
    let notification = "";
    let localList = loadParsedListFromLocalStorage(string);
    const originalList = loadParsedListFromLocalStorage(string);
    
    notification = alreadyOnList(localList, obj) ? "success" : "error";
    if(alreadyOnList(localList, obj)){
        localList = localList.filter( (localObj) => 
            localObj.id !== obj.id);
    }

    if(!noChangedList(originalList, localList))
        localList = saveListToLocalStorage(string, localList);

    notification === "success" ?
            removedNotification() :
            errorNotification();
    return localList;
}

const loadParsedListFromLocalStorage = (string) => {
     const localList = localStorage.getItem(string);
     const parsedList = JSON.parse(localList) || [];
     return parsedList;
}

const saveListToLocalStorage = (string, listObj) => {
    localStorage.setItem(string, JSON.stringify(listObj));
}