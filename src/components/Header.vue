<template>
  <div class="introduce">
    {{intro}}
    <div class="bottom"/>
  </div>
</template>

<script>
export default {
  props: {
    intro: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/color.scss';

.introduce{
  font-size: 1.4rem;
  color: $black;
  padding: 2px 20px;
  margin: 6px 0px 12px 0px;
  text-align: left;
  box-shadow: 1px 1px 1px rgba(0,0,0,0.1);

  .bottom{
    width: 100%;
    border: 1px dashed $light-blue;
    margin: 10px 0px 0px 0px;
  }
}
</style>
