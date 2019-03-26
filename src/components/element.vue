<template>
    <div>
        <slot></slot>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                childs: []
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
