<template>
    <gui-draggable class="page-builder-wapper" :list="list" :options="{group:{name:'list',put:true}, ghostClass: 'ghost'}" @add="handleAdd">
        <component :is="item.component" v-for="(item) in list" :key="item.key" ref="elements"></component>
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
            handleAdd(evt) {
                const newIndex = evt.newIndex;
                const to = evt.to;
                console.log(to);
                const key = Date.parse(new Date()) + '_' + Math.ceil(Math.random() * 99999);
                this.$set(this.list, newIndex, {
                    ...this.list[newIndex],
                    key
                });
                console.log(this.list);
                this.childs = this.$refs.elements;
            }
        }
    }
</script>
<style>
.ghost{
    display: block;
    height: 0px;
    border: 1px solid #409eff;
}
</style>
