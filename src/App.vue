<template lang="pug">
  #app
    img(src="./assets/img/logo.png")
    h1 {{ msg }}
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style lang="scss">
  @import './assets/scss/main.scss';
</style>
