<template>
    <vue-json-editor v-model="json" :showBtns="false" mode="form" :modes="['form']" lang="ZH_cn" @json-change="onJsonChange">
    </vue-json-editor>
</template>
<script>
    //import jsoneditor from 'json-editor'
    import vueJsonEditor from 'vue-json-editor'
    export default {
        components: {
            vueJsonEditor
        },
        data() {
            return {
                json: {
                    "Array": [1, 2, 3],
                    "Boolean": true,
                    "Null": null,
                    "Number": 123,
                    "Object": {
                        "a": "b",
                        "c": "d"
                    },
                    "String": "Hello World"
                }
            }
        },
        mounted() {
            // let container = this.$refs.editor;
            // this.editor = new jsoneditor(container, {
            //     mode: 'form',
            //     indentation: 4,
            //     search: true,
            //     theme: "bootstrap2"
            // });
            // this.editor.set({
            //     "Array": [1, 2, 3],
            //     "Boolean": true,
            //     "Null": null,
            //     "Number": 123,
            //     "Object": {
            //         "a": "b",
            //         "c": "d"
            //     },
            //     "String": "Hello World"
            // })
        },
        methods:{
            onJsonChange(){

            }
        }
    }
</script>
