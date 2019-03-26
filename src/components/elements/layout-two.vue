<template>
    <el-row :gutter="20">
        <el-col :span="8" v-for="n in column" :key="n">
            <div class="grid-content bg-purple">
                <gui-dragable-box ref="column"></gui-dragable-box>
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
        console.log(this.$refs.column);
        this.$refs.column.map((item)=>{
            this.childs.push(item);
        });
        // this.childs.push(this.$refs.c1);
        // this.childs.push(this.$refs.c1);
        // this.childs.push(this.$refs.c1);
    }
}
</script>

