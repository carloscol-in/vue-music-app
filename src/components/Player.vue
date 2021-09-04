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
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState(['track']),
  },
};
</script>

<style lang="scss" scoped>
img {
  width: 124px;
  border-radius: 24px;
}
</style>