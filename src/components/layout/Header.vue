<template lang="pug">
section.hero.is-success
  .hero-head
    header.nav
      .container
        .nav-left
          .nav-item
            strong Music App
        .nav-right.nav-menu
          router-link.nav-item(:to='{ name: "search" }') Search
          router-link.nav-item(:to='{ name: "about" }') About us

  .hero-body
    .container.has-text-centered
      h1.title Music App
      h2.subtitle Now songs
      ma-player
</template>

<script>
import MaPlayer from '@/components/Player.vue';

export default {
  components: {
    MaPlayer,
  },
};
</script>
