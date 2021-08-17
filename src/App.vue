<template lang="pug">
  #app
    input(v-model="name")
    input(v-model="lastName")

    p {{ fullName }}
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      name: 'joedoe',
      lastName: 'smithers'
    }
  },
  computed: {
    fullName () {
      return `${this.name} ${this.lastName}`
    }
  }
}
</script>

<style lang="scss">
  @import './assets/scss/main.scss';
</style>
