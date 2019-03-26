<template>
    
    <el-row :gutter="20">
        <el-col :span="8" v-for="(item,i) in value.childs" :key="i">
            <div class="grid-content bg-purple">
                <gui-dragable-box v-model="value.childs[i]"></gui-dragable-box>
            </div>
        </el-col>
        
    </el-row>
</template>
<script>
import element from "../element";
export default {
    extends:element,
    props:{
        column:{
            type:Number,
            default:3
            
        }
    },
    data(){
        return{

        }
    },
    mounted(){
        this.value.childs.push({
            childs:[]
        });
        this.value.childs.push({
            childs:[]
        });
        this.value.childs.push({
            childs:[]
        });
    }
}
</script>

