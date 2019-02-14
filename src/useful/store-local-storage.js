function storeLocalStorage(key, object) {
    const json = JSON.stringify(object);
    window.localStorage[key] = json;
}

export default storeLocalStorage;