<template lang="pug">
.content(v-if='track && track.album')
  p
    img(:src='track.album.images[0].url')
  p
    strong {{ track.name }}
    small {{ " " }}
    small {{ track.duration_ms | mstotime }}
  p
    audio(controls, :src='track.preview_url')
</template>

<script>
export default {
  data() {
    return {
      track: {},
    };
  },
  created() {
    this.$bus.$on('play-track', (track) => {
      this.track = track;
    });
  },
  computed: {
    duration() {
      return `${this.track.duration_ms}`;
    },
  },
};
</script>

<style lang="scss" scoped>
img {
  width: 124px;
  border-radius: 24px;
}
</style>