<template lang="pug">
  .content
    p
      img(:src="track.album.images[0].url")
    p
      strong {{ track.name }}
      small {{ track.duration }}
    p
      audio(controls, :src="track.preview_url")
</template>

<script>
export default {
  data () {
    return {
      track: {}
    }
  },
  created () {
    this.$bus.$on('play-track', (track) => {
      this.track = track
    })
  },
  computed: {
    duration () {
      return `${this.track.duration_ms}`
    }
  }
}
</script>

<style lang="scss" scoped>
  img {
    width: 124px;
    border-radius: 24px;
  }
</style>