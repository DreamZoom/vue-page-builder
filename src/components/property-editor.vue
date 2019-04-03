<template>
    <div>
        <vue-json-editor v-if="comp" :value="propertys" :showBtns="false" mode="form" :modes="['form']" lang="ZH_cn" @json-change="onJsonChange">
        </vue-json-editor>
    </div>
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
            }
        },
        computed: {
            comp() {
                return this.$store.state.current;
            },
            propertys(){
                return this.$store.state.current? this.$store.state.current.propertys:{};
            }
        },
        methods: {
            onJsonChange(json) {
                this.$store.commit('update',json);
            }
        }
    }
</script>
