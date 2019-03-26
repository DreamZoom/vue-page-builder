<template>
    <component :is="component" ref="element" :value="value"></component>
</template>


<script>
    import elements from "./elements/index.js"
    export default {
        props: {
            value: Object
        },
        computed:{
            component(){
                const key = this.value.tag;
                const comp = elements[key] || {template:"<div>此组件无效</div>"}
                return comp;
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
