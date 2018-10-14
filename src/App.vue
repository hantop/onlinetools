<template>
  <div id="app">
    <el-container class="container">
      <el-aside>
        <Toolsbar/>
      </el-aside>

      <el-main>
        <router-view/>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import Toolsbar from './components/Toolsbar.vue'
export default {
  components: {
    Toolsbar
  },
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  width:100%;
}

body,
html{
  height: 100%;
  width: 100%;
}

html{
  font-size: 10px;
}

body{
  background-image: url('./assets/images/pattern.png');
  background-color: rgba(93,174,221,1);
  background-repeat: repeat;
}

.container{
  height: 100%;
  width: 100%;
}

</style>
