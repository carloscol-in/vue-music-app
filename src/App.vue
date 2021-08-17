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
      .container
        p
          a {{ searchMessage }}

      .container.results
        .rows
          .row(v-for="track in tracks")
            p {{ track.name }} - 
            a(v-for="artist in track.artists", style="margin-right: 15px", :href="artist.external_urls.spotify") {{ artist.name }}
</template>

<script>
import TrackService from './services/track'

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
      if (!this.searchQuery) { return }

      TrackService.search(this.searchQuery)
        .then(res => {
          this.tracks = res.tracks.items
        })
    }
  },
  computed: {
    searchMessage () {
      return `Found ${this.tracks.length} tracks`
    }
  }
}
</script>

<style lang="scss">
  @import './assets/scss/main.scss';

  .results {
    margin-top: 50px;
  }
</style>
