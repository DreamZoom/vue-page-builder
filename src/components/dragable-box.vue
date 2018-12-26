<template>
    <gui-draggable class="page-builder-wapper" :list="list" :options="{group:{name:'people',put:true}, ghostClass: 'ghost'}" @add="handleAdd">
        <component :is="item.component" v-for="(item,i) in list" :key="i" ref="elements"></component>
    </gui-draggable>
</template>
<script>
    import element from "./element";
    export default {
        extends: element,
        data() {
            return {
                list: []
            }
        },
        mounted(){
            console.log(this.list);
        },
        updated() {
           
        },
        methods: {
            handleAdd() {
                //this.childs = this.$refs.elements;
            }
        }
    }
</script>
