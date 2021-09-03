<template lang="pug">
.container
  .columns
    .column.is-3.has-text-centered
      figure.media-left
        p.image
          img(:src='track.album.images[0].url')
        p
          a.button.is-primary.is-large
            span.icon(@click='selectTrack')

    .column.is-8
      .panel
        .panel-heading
          h1.title {{ track.name }}
        .panel-block
          article.media-content
            .media-content
              .content
                ul(v-for='(v, k) in track')
                  li
                    strong {{ k }}:&nbsp;
                    span {{ v }}

            nav.level
              .level-left
                a.level-item
</template>

<script>
import TrackService from '@/services/track';
import trackMixin from '@/mixins/track';

export default {
  mixins: [trackMixin],
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