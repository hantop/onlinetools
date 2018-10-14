<template>
  <div class="container">
    <Header intro="String Length"/>
    <textarea class="input-area" v-model="input" placeholder="Waitting Input...">

    </textarea>
    <span class="result">
      {{lenResult}}
    </span>
  </div>
</template>

<script>
import Header from '../Header.vue'
export default {
  components: {
    Header
  },
  data () {
    return {
      input: ''
    }
  },
  computed: {
    lenResult () {
      return this.input.length
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/color.scss';
@import '@/assets/scss/components.scss';

.container{
  display: flex;
  flex-direction: column;
  background: $white;

  .input-area{
    @extend .textarea-ui;
    width: 90%;
    font-size: 2rem;
    overflow: auto;
    flex-basis: 200px;
    position: relative;
    padding: 4px 4px;
    margin: 10px auto 20px auto;
    border: 1px solid $light-grey;
    resize: none;
    box-sizing: border-box;
    align-content: center;
  }
  .result{
    margin: 20px 10px 0px 10px;
    font-size: 3rem;
  }
}

</style>
