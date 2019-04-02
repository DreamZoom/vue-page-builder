<template>
    <vue-draggable class="draggable-box" v-model="list" :options="options" @change="handleChange">
        <gui-element v-for="(item,i) in list" :key="i" v-model="list[i]"></gui-element>
        <div class="element-empty" v-if="!list.length">请拖拽元素到此</div>
    </vue-draggable>
</template>
<script>
    import vueDraggable from 'vuedraggable';
    export default {
        props:{
            value:{
                type:Array,
                required:true
            }
        },
        components: {
            "vue-draggable":vueDraggable
        },
        data() {
            return {
                options: {
                    group: {
                        name: 'people',
                        put: true
                    },
                    ghostClass: 'ghost'
                },
                list:[]
            }
        },
        beforeMount(){
            if(this.value && this.value instanceof Array){
                this.value.map((item)=>{
                    this.list.push(item);
                })
            }
        },
        methods: {
            handleChange(){
                console.log(this.list)
                this.$emit("input",this.list);
            }
        }
    }
</script>
<style>
.ghost{
    border: solid 1px #f00;
}
.draggable-box{
    outline: dashed 1px #ccc;
}
.element-empty{
    text-align: center;
    color: #aaa;
    line-height: 100px;
}
</style>
