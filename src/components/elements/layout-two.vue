<template>
    <el-row :gutter="20">
        <el-col :span="6">
            <div class="grid-content bg-purple">
                <gui-draggable class="page-builder-wapper" v-model="childs_1"  :options="{group:{name:'people',put:true}, ghostClass: 'ghost'}">
                     <gui-render v-for="(item,i) in childs_1" :key="i" :element="item">  </gui-render>
                </gui-draggable>
            </div>
        </el-col>
        <el-col :span="6">
            <div class="grid-content bg-purple">
                <gui-draggable class="page-builder-wapper" v-model="childs_2"  :options="{group:{name:'people',put:true}, ghostClass: 'ghost'}">
                     <gui-render v-for="(item,i) in childs_2" :key="i" :element="item">  </gui-render>
                </gui-draggable>
            </div>
        </el-col>
        <el-col :span="12">
            <div class="grid-content bg-purple">
                <gui-draggable class="page-builder-wapper" v-model="childs_3"  :options="{group:{name:'people',put:true}, ghostClass: 'ghost'}">
                     <gui-render v-for="(item,i) in childs_3" :key="i" :element="item">  </gui-render>
                </gui-draggable>
            </div>
        </el-col>
    </el-row>
</template>
<script>
export default {
    props:{
        element:{
            type:Object,
            required:true
        }
    },
    data(){
        return{
            childs_1:[],
            childs_2:[],
            childs_3:[],
        }
    },
    mounted(){
       
    }
}
</script>

