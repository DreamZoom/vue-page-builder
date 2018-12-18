export default {
    name:"render",
    render(h){

        if(this.element && this.element.component){
            return h(this.element.component,{props:{element:this.element}});
        }
        else{
            return h("div",{ class:"sss"});
        }
        

    },
    mounted(){
        console.log(this.element);
    },
    props:{
        element:Object
    }
}