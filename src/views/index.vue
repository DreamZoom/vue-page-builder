<template>
    <div class="page-workspace">
        <div class="page-project-list">
            <h3>页面列表</h3>
            <div>
                <el-button-group>
                    <el-button type="primary" icon="el-icon-circle-plus-outline" @click="createPage"></el-button>
                    <el-button type="primary" icon="el-icon-document" @click="save"></el-button>
                    <el-button type="primary" icon="el-icon-delete"></el-button>
                </el-button-group>
            </div>
            <div>
                <div v-for="(page,i) in workspace.pages" :key="i">
                   <p class="page-item" @click="select(i)" :class="{active:workspace.select_index==i}">{{page.name}}</p>
                </div>
            </div>
        </div>
        <div class="page-workspace-main">
            <gui-page-editor v-if="page" v-model="page" :register="register"> </gui-page-editor>
            <div v-if="!page"></div>
        </div>
        <div class="page-property-editor">
            <gui-property-editor></gui-property-editor>
        </div>
    </div>
</template>
<script>
    import service from "../components/services/workspace"
    export default {
        data() {
            return {
                workspace: {
                    pages: [],
                    select_index:-1
                }
            }
        },
        mounted() {
            var data = service.getData();
            var select_index = -1;
            if(data.pages.length>0) select_index=0;
            this.workspace = {...data,select_index};
            console.log(this.workspace);
        },
        computed:{
            page(){
                if(this.workspace.select_index>-1 && this.workspace.select_index<this.workspace.pages.length){
                    return this.workspace.pages[this.workspace.select_index];
                }
                return null;
            }
        },
        methods: {
            register(elements) {
                elements.push({
                    name: "测试",
                    icon: "",
                    tag: "kkk",
                    template: {
                        data() {
                            return {
                                content: "测试"
                            }
                        },
                        mounted() {
                            console.log(this.value);
                        },
                        template: '<p v-editable="value.content">哈哈哈</p>'
                    }
                });
            },
            exportJson() {
                console.log(this.page)
            },

            save(){
                service.save({...this.workspace});
                console.log(this.workspace);
            },
            
            createPage() {
                this.$prompt('请输入页面名称', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消'
                }).then(({
                    value
                }) => {
                    this.workspace.pages.push({
                        name:value
                    });
                    this.select(this.workspace.select_index+1);
                    service.save({...this.workspace});
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消'
                    });
                });
            },
            
            select(i){
                this.workspace.select_index=-1;
                this.$nextTick(()=>{
                     this.workspace.select_index = i;
                })
            }
        }
    }
</script>

<style>
    .page-workspace {
        width: 100%;
        height: 100%;
        position: relative;
    }
    .page-project-list {
        padding: 0 5px;
        width: 200px;
        position: absolute;
        left: 0px;
        height: 100%;
        border-right: solid 1px #ddd;
        /* background-color: #ddd; */
    }

    .page-project-list .page-item{
        margin: 0px;
    }
    .page-project-list .page-item.active{
        background-color: #aaa;
    }
    .page-workspace-main {
        margin-left: 300px;
        margin-right: 200px;
        height: 100%;
        overflow: hidden;
    }
    .page-property-editor{
        background-color: #fff;
        width: 300px;
        height: 100%;
        position: absolute;
        right: 0px;
        top:0px;
    }
</style>
