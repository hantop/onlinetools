<template>
  <div class="container">
    <div class="toolsbar">
    <ul>
      <li
      v-for="tool in tools"
      :key="tool.id">
        <router-link
        :to="tool.path">{{ tool.name }}
        </router-link>
      </li>
    </ul>
    </div>

  </div>
</template>

<script>
import tools from '../tools.js'
export default {
  data () {
    return {
      tools: tools
    }
  },
  methods: {
    renderRouter () {

    }
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/color.scss";

$medium: calc(100% - 50px);
.container {
  height: 100%;
  width: 100%;

  .toolsbar {
    height: $medium;
    box-shadow: 1px 1px 10px $grey-blue;
    display: flex;
    flex-direction: column;
    justify-content: center;
    ul {
      background-color: rgba($color: #ffffff, $alpha: 0.25);
      li {
        list-style: none;
        text-decoration: none;
        background-color: $light-blue;
        margin: 6px 3px 6px 0px;
        border-radius: 20px;
        font-size: 1.4rem;
        color: rgba(96, 96, 96, 1);
        padding: 2px;
        line-height: 26px;
        display: flex;
        flex-direction: row;
        &:hover {
          background: linear-gradient(
            135deg,
            rgba(255, 255, 255, 1) 0%,
            rgba(192, 192, 192, 1) 100%
          );
        }
        a {
          text-decoration: none;
          font-weight: bold;
          flex-grow: 1;
          color: $light-white;
          &:hover{
            color: $black-grey;
          }
        }
      }
    }
  }

  .toolbar {
    height: $medium;
    width: 100%;
    align-items: stretch;
  }
}
</style>
