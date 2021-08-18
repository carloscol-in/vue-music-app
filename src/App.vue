<template lang="pug">
  #app
    ma-header

    ma-notification(v-show="showNotification")
      p(slot="body") No results found!

    ma-loader(v-show="isLoading")

    section.section(v-show="!isLoading")
      nav.nav
        .container
          input.input.is-large(
            type="text",
            placeholder="Which song are you looking for?",
            v-model="searchQuery"
          )
          a.button.is-info.is-large(@click="search") Search
          a.button.is-danger.is-large &times;
      .container
        p {{ searchMessage }}

      .container.results
        .columns.is-multiline
          .column.is-one-quarter(v-for="track in tracks")
            ma-track(
              :class="{ 'is-active': track.id === selectedTrack }"
              :track="track",
              @select="playTrack"
            )

    ma-footer
</template>

<script>
import TrackService from '@/services/track'

// Global Components

// Local components
import MaHeader from '@/components/layout/Header.vue'
import MaFooter from '@/components/layout/Footer.vue'
import MaLoader from '@/components/shared/Loader.vue'
import MaNotification from '@/components/shared/Notification.vue'
import MaTrack from '@/components/Track.vue'

export default {
  name: 'app',
  components: {
    MaHeader,
    MaFooter,
    MaTrack,
    MaLoader,
    MaNotification
  },
  data () {
    return {
      searchQuery: '',
      tracks: [],
      isLoading: false,
      selectedTrack: '',
      showNotification: false
    }
  },
  methods: {
    search () {
      // if (!this.searchQuery) { return }

      this.isLoading = true

      TrackService.search(this.searchQuery)
        .then(res => {
          this.tracks = res.tracks.items
          this.showNotification = res.tracks.total === 0
          this.isLoading = false
        })
        .catch(res => {
          this.showNotification = true
          this.isLoading = false
        })
    },
    playTrack (id) {
      this.selectedTrack = id
    }
  },
  computed: {
    searchMessage () {
      return `Found ${this.tracks.length} tracks`
    }
  },
  watch: {
    showNotification () {
      if (this.showNotification) {
        setTimeout(() => {
          this.showNotification = false
        }, 3000)
      }
    }
  }
}
</script>

<style lang="scss">
  @import './assets/scss/main.scss';

  .results {
    margin-top: 50px;
  }

  .is-active {
    border: 3px #48c78e solid;
  }
</style>
