<template>
  <div class="tool">
    <el-input v-model="magnetInput" placeholder="Input Magnet URI"></el-input>
  </div>
</template>

<script>
export default {
  data () {
    return {
      magnetInput: ''
    }
  }
}
</script>

<style lang="scss" scoped>

.tool{
  display: flex;

}

</style>
