<template lang="pug">
  .row
    .col.s12.m7
      .card
        .card-image
          img(src='dist/card_image.jpg')
          span.card-title Configuración de alertas
        .card-content
          p Sección de configuración.
        .card-action
          a(href='#') Configuración
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