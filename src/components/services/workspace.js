import store from "./store";

class workspace {
    
    store={
        pages:[]
    }

    constructor(){
        this.store = store.get("workspace")||this.store;
    }
    load(){
        this.store = store.get("workspace")||this.store;
    }

    getData(){
        let data = store.get("workspace")||this.store;
        return {
            ...data
        }
    }

    save(data){
        this.store = data;
        store.set("workspace",this.store);
    }
}

export default new workspace();