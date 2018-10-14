<template>
  <div class="container">
    <Header intro="Base64 Encoder & Decoder"/>
    <textarea
      class="input-area"
      v-model="input"
      placeholder='Waitting Input'
      spellcheck="false">

    </textarea>

    <div class="button-group">
      <button
      @click="encode">
        <span>
          Encode
        </span>
      </button>

      <button
      @click="decode">
      <span>
        Decode
      </span>
      </button>
    </div>

    <textarea
    class="output-area textarea-center"
    v-model="output"
    spellcheck="false">

    </textarea>
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
      input: '',
      output: ''
    }
  },
  methods: {
    encode () {
      this.output = btoa(this.input)
    },
    decode () {
      this.output = atob(this.input)
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
  height: 100%;
  width: 100%;
  background-color: $white;

  textarea{
    resize: none;
  }

  .output-area, .input-area{
    @extend .textarea-center;
    @extend .textarea-ui;
    flex-basis: 200px;
    width: 80%;
  }

  .output-area{
    margin: 0px auto 10px auto;
  }
  .button-group > button{
    align-items: center;
    padding: 10px;
    margin: 10px 0px;
    border: 1px solid $light-blue;
    font-size: 1rem;
    border-radius: 10px;
    &:hover{
      color: $light-blue;
      transition: color 0.2s cubic-bezier(0.455, 0.03, 0.515, 0.955);
      cursor: pointer;
    }
  }

}

</style>
