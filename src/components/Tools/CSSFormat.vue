<template>
  <div class="container">
    <Header intro="Beauty CSS"></Header>

    <div id="css-editor"></div>
    <div
    class="css-btn"
    id="start"
    @click="startFormat">
      Start
    </div>
    <div class="css-editor-result" id="css-editor-result">

    </div>
    <div class="controller">

    </div>
  </div>
</template>

<script>
import Header from '../Header.vue'
import cssBeautify from 'cssbeautify'
import * as Ace from 'ace-builds'
export default {
  data () {
    return {
      editorSrc: {
        type: Object,
        default: undefined
      },
      editorRes: {
        type: Object,
        default: undefined
      }

    }
  },
  components: {
    Header
  },
  mounted () {
    this.$nextTick(() => {
      let session
      Ace.config.set('basePath', '/static/js/ace')
      this.editorSrc = Ace.edit('css-editor')
      session = this.editorSrc.getSession()
      session.setMode('ace/mode/css')
      this.editorSrc.setFontSize(14)

      let sessionRes
      this.editorRes = Ace.edit('css-editor-result')
      sessionRes = this.editorRes.getSession()
      sessionRes.setMode('ace/mode/css')
      this.editorRes.setFontSize(14)
    })
  },
  methods: {
    startFormat () {
      let src = this.editorSrc.getValue()
      let sty = cssBeautify(src, {

      })

      this.editorRes.setValue(sty)
    }
  }

}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/components.scss';

.container{
  #css-editor{
    flex-grow: 6;
    height: auto;
    width: 100%;
    box-sizing: border-box;
    position: relative;

  }

  .css-btn{
    @extend .button-ui;
    font-size: 1.4rem;
  }

  .css-editor-result{
    flex-grow: 6;
  }

  .controller{
    padding: 1rem 0.5rem;
  }
}
</style>
