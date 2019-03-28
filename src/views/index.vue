<template>
    <div class="page-workspace">
        <div class="page-project-list">
            <h3>页面列表</h3>
            <div>
                <el-button-group>
                    <el-button type="primary" icon="el-icon-edit" @click="createProject"></el-button>
                    <el-button type="primary" icon="el-icon-share"></el-button>
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
                    select_index:1
                },
                page: {}
            }
        },
        mounted() {
            this.workspace = service.getData();
            console.log(this.workspace);
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
            
            createProject() {
                this.$prompt('请输入项目名称', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消'
                }).then(({
                    value
                }) => {
                    this.workspace.pages.push({
                        name:value
                    });
                    service.save({...this.workspace});
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消'
                    });
                });
            },
            
            select(i){
                this.workspace.select_index = i;
            }
        }
    }
</script>

<style>
    .page-workspace {
        width: 100%;
        height: 100%;
    }
    .page-project-list {
        padding: 0 5px;
        width: 200px;
        float: left;
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
        margin-left: 200px;
        height: 100%;
        overflow: hidden;
    }
</style>
