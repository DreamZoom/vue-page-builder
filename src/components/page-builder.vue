<template>
    <div class="page-workspace">
        <div class="page-project-list"></div>
        <div class="page-workspace-main">
            <gui-page-editor v-model="page" :register="register"> </gui-page-editor>
        </div>
    </div>
</template>
<script>
    
    import elements from "./elements/index";
    
    export default {
        data() {
            return {
                elements: elements.elements,
                layouts:elements.layouts,
                list: [],
                root:{
                    
                }
            }
        },
        methods:{
            exportJson(){
                console.log(this.$refs.root.export());
            },
            exportHtml(){
                console.log(this.$refs.root.$el.innerHTML);
            }
        }
    }
</script>
<style>
    .page-editor {
        height: 100%;
        position: relative;
    }
    .page-builder-wapper {
        padding: 20px;
        border: solid 1px #efefef;
    }
    .page-editor-tools {
        position: absolute;
        width: 200px;
        height: 100%;
    }
    .tool-icon{
        width: 60px;
    }
    .page-editor-main {
        margin-left: 200px;
        height: 100%;
    }
</style>
