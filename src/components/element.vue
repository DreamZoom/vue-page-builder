<template>
    <div @click.stop="handleClick">
        <component :is="component" ref="element" :value="value"></component>
    </div>
</template>


<script>
    import elements from "./elements/index.js"
    export default {
        props: {
            value: Object
        },
        computed: {
            component() {
                const key = this.value.tag;
                const extend_elements = this.$elements || {};
                const comp = elements[key] || extend_elements[key] || {
                    template: "<div>此组件无效</div>"
                };
                return comp;
            }
        },
        methods: {
            export () {
                return {
                    ...this.value
                };
            },
            handleClick() {
                this.$store.commit('select',this.value);
                //console.log(this);
            }
        }
    }
</script>
