<template>
  <div class="gui-page-editor">
    <div class="gui-page-editor-tools">
      <div class="tool-group" v-for="(group,i) in groups" :key="i">
        <h3 class="tool-group-title">{{group.name}}</h3>
        <gui-draggable
          v-model="group.components"
          :options="{group:{ name:'people', pull:'clone',put:false},sort:true, ghostClass: 'ghost'}"
        >
          <div class="tool-item" v-for="(component,j) in group.components" :key="j">
            <img src="../assets/icons/buju.png" alt srcset><br />
            {{component.name}}
          </div>
        </gui-draggable>
      </div>
    </div>
    <div class="gui-page-editor-main">
      <div class="main-page-wapper">
        <gui-dragable-box ref="root" v-model="page"></gui-dragable-box>
      </div>
    </div>
  </div>
</template>
<script>

import elements from "./elements/index.js"
export default {
  data() {
    return {
      groups: [
        {
          name: "基本组件",
          components: [
            {
              name: "布局",
              icon: "buju.jpg",
              tag: elements.layout
            },
            {
              name: "图片",
              icon: "buju.jpg",
              tag: elements.image
            },
            {
              name: "水平布局",
              icon: "buju.jpg",
              tag: elements.row
            }
          ]
        }
      ],
      page:{
        childs:[]
      }
    };
  }
};
</script>


<style>
.gui-page-editor {
  width: 100%;
  height: 100%;
  display: flex;
}
.gui-page-editor-tools {
  flex-basis: 200px;
  border-right: solid 1px #e5e5e5;
}
.gui-page-editor-main {
  flex: 1;
  overflow: auto;
  background-color: #f8f9fa;
}
.tool-group-title {
  padding-left: 10px;
}
.gui-page-editor-tools .tool-item {
  display: inline-block;
}
.gui-page-editor-tools .tool-item img {
  width: 60px;
  height: 60px;
}

.main-page-wapper {
  width: 400px;
  min-height: 600px;

  margin: auto;
  margin-top: 200px;
  margin-bottom: 200px;
  background-color: #fff;
  border: solid 1px #e5e5e5;
}
</style>
