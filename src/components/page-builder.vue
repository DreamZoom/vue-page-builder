<template>
    <div class="page-editor"> 
        <div class="page-editor-tools">
            <draggable
                v-model="elements"
                :options="{group:{ name:'people', pull:'clone',put:false},sort:true, ghostClass: 'ghost'}"
            >
                <div v-for="(element,i) in myArray" :key="i">{{element.name}}</div>
            </draggable>
        </div>
        <div class="page-editor-main">
            <draggable
                class="page-builder-wapper"
                v-model="list"
                :options="{group:{name:'people',put:true}, ghostClass: 'ghost'}"
            >
            
            <div v-for="(item,i) in list" :key="i">{{item.name}}</div>
            </draggable>
        </div>
    </div>
</template>
<script>
import draggable from 'vuedraggable'
export default {
    components: {
            draggable,
    },
    data(){
        return {
            elements:[{name:1},{name:2}],
            list:[]
        }
    }
}
</script>
<style>
.page-editor{
    height: 100%;
    position: relative;
}
.page-builder-wapper{
    padding: 20px;
    border: solid 1px #efefef;
}

.page-editor-tools{
    position: absolute;
    width: 200px;
    height: 100%;
}

.page-editor-main{
    margin-left: 200px;
    height: 100%;
}
</style>
