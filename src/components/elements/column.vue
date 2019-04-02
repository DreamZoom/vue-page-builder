<template>
    <gui-draggable class="flex-container flex-column" v-model="value.childs"></gui-draggable>
</template>
<script>
    import comp from "./comp";
    export default {
        extends: comp,
        mounted(){
            console.log(this.value);
        },
        methods: {
        }
    }
</script>
<style>
.flex-container{
    min-height: 40px;
   
}

.flex-column{
    display: flex;
    flex-direction: column;
    padding-bottom: 40px;
}
.flex-column > *{
    flex:1;
}
</style>
