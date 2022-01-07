class LocalDataRepository{
    save(key : string , data : string){
        localStorage.setItem(key , data)
    }

    get(key : string){
        return localStorage.getItem(key)
    }
}


export {
    LocalDataRepository
}