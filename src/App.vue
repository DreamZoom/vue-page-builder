<template>
  <div class="app-wapper">
   
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
 html,body,#app,.app-wapper{
   position: relative;
   padding: 0;
   margin: 0;
   height: 100%;
 }
</style>
