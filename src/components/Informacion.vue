<template lang="pug">
  .row
    .col.s12.m7
      .card
        .card-image
          img(src='dist/card_image.jpg')
          span.card-title Información de tus operaciones
        .card-content
          p En está sección estará disponible la información de las operaciones
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
