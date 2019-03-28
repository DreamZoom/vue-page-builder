export default {
    get(key){
        var strvalue = localStorage.getItem(key);
        return JSON.parse(strvalue);
    },
    set(key,value){
        localStorage.setItem(key,JSON.stringify(value));
    }
}