<template lang="pug">
  #app
    section.section
      nav.nav.has-shadow
        .container
          input.input.is-large(
            type="text",
            placeholder="Which song are you looking for?",
            v-model="searchQuery"
          )
          a.button.is-info.is-large(@click="search") Search
          a.button.is-danger.is-large &times;
          p
            a {{ searchMessage }}

      .container.results
        .columns
          .column(v-for="track in tracks")
            p {{ track.name }}
            p {{ track.artist }}
</template>

<script>
import TrackService from './services/track'

// const tracks = [
//   {
//     name: 'Hysteria',
//     artist: 'Def Leppard'
//   },
//   {
//     name: 'Master of puppets',
//     artist: 'Metallica'
//   },
//   {
//     name: 'Something About Us',
//     artist: 'Daft Punk'
//   }
// ]

export default {
  name: 'app',
  data () {
    return {
      searchQuery: '',
      tracks: []
    }
  },
  methods: {
    search () {
      TrackService.search(this.searchQuery)
        .then(res => {
          console.log(res)
        })
    }
  },
  computed: {}
}
</script>

<style lang="scss">
  @import './assets/scss/main.scss';

  .results {
    margin-top: 50px;
  }
</style>
