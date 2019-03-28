import store from "./store";

class workspace {
    
    store={
        pages:[]
    }

    constructor(){
        this.store = store.get("workspace")||this.store;
    }

    getData(){
        return {
            ...this.store
        }
    }

    save(data){
        this.store = data;
        store.set("workspace",this.store);
    }
}

export default new workspace();