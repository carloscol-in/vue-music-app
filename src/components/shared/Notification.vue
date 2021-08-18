<template lang="pug">
  .container
    .columns
      .column.is-5.is-offset-4
        .notification.is-danger
          slot(name="body")
            p Something went terribly wrong!
</template>

<style lang="scss">
  .notification {
    margin: 10px;
  }
</style>