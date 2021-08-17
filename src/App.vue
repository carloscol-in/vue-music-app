<template lang="pug">
  #app
    p(v-show="showValue") {{ value }}

    ul
      li(v-for="i in items") {{ i }}
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      value: 'Value!',
      showValue: true,

      items: [1, 2, 3, 4]
    }
  }
}
</script>

<style lang="scss">
  @import './assets/scss/main.scss';
</style>
