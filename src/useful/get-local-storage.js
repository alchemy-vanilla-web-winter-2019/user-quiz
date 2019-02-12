function getLocalStorage(key) {
    const json = window.localStorage[key];
    return JSON.parse(json);
}

export default getLocalStorage;