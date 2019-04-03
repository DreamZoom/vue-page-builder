<template>
    <gui-draggable class="flex-container flex-row" v-model="value.childs">
    </gui-draggable>
</template>
<script>
    import comp from "./comp.js";
    export default {
        extends: comp,
        methods: {}
    }
</script>
<style>
    .flex-container {
        min-height: 40px;
    }
    .flex-row {
        display: flex;
    }
    .flex-row>* {
        flex: 1;
    }
</style>
