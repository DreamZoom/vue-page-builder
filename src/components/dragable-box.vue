<template>
    <gui-draggable class="page-builder-wapper" :list="value.childs" :options="{group:{name:'people',put:true}, ghostClass: 'ghost'}">
        <component :is="item.tag" v-for="(item,i) in value.childs" :key="i" ref="elements" :value="value.childs[i]"></component>
    </gui-draggable>
</template>
<script>
    import element from "./element";
    export default {
        extends: element,
        methods: {

        }
    }
</script>
<style>
.page-builder-wapper{
    min-height: 400px;
}
.ghost{
    border: solid 1px #f00;
}
</style>
