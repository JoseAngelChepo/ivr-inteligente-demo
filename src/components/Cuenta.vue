<template lang="pug">
  .row
    .col.s12.m7
      .card
        .card-image
          img(src='dist/card_image.jpg')
          span.card-title Información de tu cuenta
        .card-content
          p Sección para encontrar información acerca de la cuenta.
        .card-action
          a(href='#') Detalles
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>

<style lang="scss">
.card {
  margin-top: 10vh;
}
</style>