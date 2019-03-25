<template>
    <div>
        jhj
        <slot></slot>
    </div>
</template>
<script>
    export default {
        props:{
            value:Object
        },
        data() {
            return {
               
            }
        },
        mounted(){
            if(!this.value.childs){
                this.value.childs=[];
            }
           
        },
        methods: {
            export () {
                var childs = this.childs.map((item) => {
                    console.log(item);
                    return item.export();
                });
                return {
                    childs
                };
            }
        }
    }
</script>
