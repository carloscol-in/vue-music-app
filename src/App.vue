<template lang="pug">
  #app
    input(v-model="name")
    p {{ name }}

    a(:href="url") Link
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      name: 'joedoe',
      url: 'https://google.com'
    }
  }
}
</script>

<style lang="scss">
  @import './assets/scss/main.scss';
</style>
