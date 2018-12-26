<template>
    <el-row :gutter="20">
        <el-col :span="6">
            <div class="grid-content bg-purple">
                <gui-dragable-box ref="c1"></gui-dragable-box>
            </div>
        </el-col>
        <el-col :span="6">
            <div class="grid-content bg-purple">
                <gui-dragable-box ref="c2"></gui-dragable-box>
            </div>
        </el-col>
        <el-col :span="12">
            <div class="grid-content bg-purple">
               <gui-dragable-box ref="c3"></gui-dragable-box>
            </div>
        </el-col>
    </el-row>
</template>
<script>
import element from "../element";
export default {
    extends:element,
    data(){
        return{

        }
    },
    mounted(){
        this.childs.push(this.$refs.c1);
        this.childs.push(this.$refs.c1);
        this.childs.push(this.$refs.c1);
    }
}
</script>

