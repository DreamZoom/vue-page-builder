<template>
  <div class="image-box">
    <img :src="value.propertys.src" alt style="width:100%">
  </div>
</template>

<script>
import comp from "./comp.js";
export default {
  extends: comp,
  beforeMount(){
    console.log("mount0");
    if(!this.value.propertys.src){
      this.value.propertys.src="https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1545814099&di=0430d3eb282c162e0512830f6a71131e&src=http://b.hiphotos.baidu.com/zhidao/pic/item/14ce36d3d539b600d3924a1feb50352ac65cb73e.jpg";
    }
    
  }
};
</script>
<style>
.image-box img{
  margin-bottom: -4px;
}
</style>
