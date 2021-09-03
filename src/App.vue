<template lang="pug">
#app
  ma-header

  router-view

  ma-footer
</template>

<script>
// Global Components

// Local components
import MaHeader from '@/components/layout/Header.vue';
import MaFooter from '@/components/layout/Footer.vue';

export default {
  name: 'app',
  components: {
    MaHeader,
    MaFooter,
  },
};
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
