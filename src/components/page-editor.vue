<template>
  <div class="gui-page-editor">
    <div class="gui-page-editor-tools">
      <div class="tool-group" v-for="(group,key) in groups" :key="key">
        <h3 class="tool-group-title">{{key}}</h3>
        <vue-draggable v-model="groups[key]" :options="{group:{ name:'people', pull:'clone',put:false},sort:false}">
          <div class="tool-item" v-for="(component,j) in groups[key]" :key="j">
            <!-- <gui-element :value="{tag:component.tag}"></gui-element> -->
            {{component.name}}
          </div>
        </vue-draggable>
      </div>
    </div>
    <div class="gui-page-editor-main">
      <div class="main-page-wapper">
        <gui-element v-model="value.root"></gui-element>
      </div>
    </div>
  </div>
</template>
<script>
  import vueDraggable from 'vuedraggable';
  import elements from "./elements/index.js"
  export default {
    props: {
      value: {
        type: Object,
        required: true
      },
      register: {
        type: Function,
        default: function() {
        }
      }
    },
    components: {
      vueDraggable
    },
    beforeMount() {
      this.value.root = {
        tag: "column",
        childs: []
      }
      
      //注册标签
      var extendElements=[];
      this.register(extendElements);
      extendElements.map((ele)=>{
        const {name,icon,tag,template,group} = ele;
        this.registerElement(name,icon,tag,template,group);
      });
    },
    data() {
      return {
        groups: {
          "base": [{
              name: "垂直布局",
              icon: "buju.jpg",
              tag: "column"
            },
            {
              name: "水平布局",
              icon: "buju.jpg",
              tag: "row"
            },
            {
              name: "图片",
              icon: "buju.jpg",
              tag: "image"
            }
          ],
          "extends":[]
        }
      };
    },
    methods: {
      registerElement(name,icon,tag,template,group) {

        if(!tag) return;
        if(!template) return;

        template.mixins=[{
          props:{
            value:Object
          }
        }]

        this.$elements[tag]=template;

        if(!group || group=="base") group="extends";
        this.groups[group]=this.groups[group]||[];

        this.groups[group].push({
          name,icon,tag
        });
      }
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
    padding: 10px;
  }
  .gui-page-editor-main {
    flex: 1;
    overflow: auto;
    background-color: #e8e9ea;
  }
  .tool-group-title {
    padding-left: 10px;
  }
  .gui-page-editor-tools .tool-item {
   display: block;
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
  .page {
    min-height: 80px;
    padding-bottom: 80px;
  }
</style>
