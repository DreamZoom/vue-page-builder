export default {
    props: {
        value: Object
    },
    beforeMount() {
        
        if (this.value && !this.value.childs) {
            this.value.childs = [];
        }
        if(this.value && !this.value.propertys){
            this.value.propertys={}
            console.log("mount1");
        }
    },
}

