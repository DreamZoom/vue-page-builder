<template>
    <section>
        <div class="rich-editor" :contenteditable="editable" @click="enableEditor" @blur="editable=false" ref="editor">{{text}}</div>
        <!-- <textarea class="rich-editor" v-model="text"  ref="editor"></textarea> -->
    </section>
</template>
<script>
    import element from "../element";
    export default {
        extends: element,
        data(){
            return {
                text:"请输入内容",
                editable:false
            }
        },
        mounted() {
        },
        computed:{
           
        },
        methods: {
            enableEditor() {
                this.editable =true; 
                this.$refs.editor.focus();   
            }
        }
    }
</script>
<style>
    .rich-editor{
        width: 100%;
        height: 100%;
        padding: 0;
        margin: 0;
        border: none;
        resize:none;
        font: inherit;
        border: 0 none;
        background: transparent;
        position: relative;
        display: block;
        outline: none;
    }
</style>

