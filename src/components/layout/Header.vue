<template lang="pug">
section.hero.is-success
  .hero-head
    header.nav
      .container
        .nav-left
          .nav-item
            strong Music App
        .nav-right.nav-menu
          a.nav-item(@click='selectLang("en")') 🇺🇸
          a.nav-item(@click='selectLang("es")') 🇲🇽
          router-link.nav-item(:to='{ name: "search" }') {{ $t("search") }}
          router-link.nav-item(:to='{ name: "about" }') {{ $t("about") }}

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

  methods: {
    selectLang(lang) {
      this.$i18n.locale = lang;
    },
  },
};
</script>
