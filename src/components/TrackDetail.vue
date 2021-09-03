<template lang="pug">
.container
  .columns
    .column.is-5.is-offset-4
      ma-track(:track='track')
</template>

<script>
import TrackService from '@/services/track';
import MaTrack from '@/components/Track.vue';

export default {
  components: { MaTrack },

  data() {
    return {
      track: {},
    };
  },

  created() {
    const id = this.$route.params.id;

    TrackService.getById(id).then((res) => (this.track = res));
  },
};
</script>

<style lang="scss" scoped>
.columns {
  margin: 20px;
}
</style>