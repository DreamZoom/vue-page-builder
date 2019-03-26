<template>

</template>

<script>
    export default {
        props: {
            value: Object
        },
        beforeMount() {
            if (this.value && !this.value.childs) {
                this.value.childs = [];
            }
        },
    }
</script>
