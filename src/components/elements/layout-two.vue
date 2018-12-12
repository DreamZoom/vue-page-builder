<template>
    <el-row :gutter="20">
        <el-col :span="6">
            <div class="grid-content bg-purple">1</div>
        </el-col>
        <el-col :span="6">
            <div class="grid-content bg-purple">2</div>
        </el-col>
        <el-col :span="12">
            <div class="grid-content bg-purple">
                <gui-draggable class="page-builder-wapper" v-model="element.childs" :options="{group:{name:'people',put:true}, ghostClass: 'ghost'}">
                    <!-- <div  v-for="(item,i) in childs" :key="i">{{i}}</div> -->
                     <gui-render v-for="(item,i) in element.childs" :key="i" :element="item">  </gui-render>
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
            childs:[]
        }
    },
    mounted(){
        this.element.childs=[];
    },
    watch:{
        childs:(val)=>{
            console.log(val);
            //this.element.childs =val;
        }
    }


}
</script>

