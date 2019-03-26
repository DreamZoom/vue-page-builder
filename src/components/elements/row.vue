<template>
    <gui-draggable class="flex-container flex-row" :list="value.childs" :options="{group:{name:'people',put:true}, ghostClass: 'ghost'}" @add="handleAdd" @moved="moved">
        <component :is="getComponent(item)" v-for="(item,i) in value.childs" :key="i" ref="elements"  v-model="value.childs[i]"></component>
    </gui-draggable>
</template>
<script>
    import element from "../element";
    export default {
        extends: element,
        methods: {
            moved(){

            },
            getComponent(item){
                return {
                    props:{
                        value:Object
                    },
                    template:`<${item.tag} v-model="value" />`
                }
            },
            handleAdd() {
                //this.childs = this.$refs.elements;
                console.log(this.value.childs);
                this.$emit("input",this.value);
            }
        }
    }
</script>
<style>
.flex-container{
    min-height: 40px;
}
.ghost{
    border: solid 1px #f00;
}
.flex-row{
    display: flex;

}
.flex-row > *{
    flex:1;
}
</style>
