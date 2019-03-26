<template>
    <div class="my-editor">
        <gui-page-editor v-model="page">

        </gui-page-editor>
    </div>
</template>
<script>
export default {
    data(){
        return {
            page:{}
        }
    }
}
</script>

<style>
.my-editor{
    height: 100%;
}
</style>
