<template lang="pug">
  #app
    h1 {{ msg }}
    p {{ 1 + 1 }}
    p {{ 'Hola' + 'Mundo' }}
    p {{ person.name }}
    p {{ person.name.toUpperCase() }}
    p {{ JSON.stringify(person) }}
    p {{ true ? 'true' : 'false' }}
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      person: {
        name: 'Joe'
      }
    }
  }
}
</script>

<style lang="scss">
  @import './assets/scss/main.scss';
</style>
