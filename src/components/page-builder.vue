<template>
    <div class="page-editor">
        <div class="page-editor-tools">
            <el-card class="box-card">
                <div slot="header" class="clearfix">
                    <span>组件</span>
                </div>
                <gui-draggable v-model="elements" :options="{group:{ name:'people', pull:'clone',put:false},sort:true, ghostClass: 'ghost'}">
                    <div v-for="(element,i) in elements" :key="i">{{element.name}}</div>
                </gui-draggable>
            </el-card>
            <el-card class="box-card">
                <div slot="header" class="clearfix">
                    <span>布局</span>
                </div>
                <gui-draggable v-model="layouts" :options="{group:{ name:'people', pull:'clone',put:false},sort:true, ghostClass: 'ghost'}">
                    <div v-for="(element,i) in layouts" :key="i">{{element.name}}</div>
                </gui-draggable>
            </el-card>
        </div>
        <div class="page-editor-main">
            <gui-draggable class="page-builder-wapper" v-model="list" :options="{group:{name:'people',put:true}, ghostClass: 'ghost'}">
                
                 <gui-render  v-for="(item,i) in list" :key="i" :element="item"> </gui-render>
            </gui-draggable>
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
                list: []
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
    .page-editor-main {
        margin-left: 200px;
        height: 100%;
    }
</style>
