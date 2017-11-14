<template lang="pug">
  .container
    .row
      .menu.col.s12
        img(src="dist/logo_menu.png", width="200")
        h4 OPCIONES DEL MENU PRINCIPAL
        router-link(to="/Informacion", class="waves-effect waves-light btn") INFORMACIÓN DE TUS OPERACIONES
        router-link(to="/Config", class="waves-effect waves-light btn") CONFIGURACIÓN DE ALERTAS
        router-link(to="/Cuenta", class="waves-effect waves-light btn") INFORMACIÓN DE TU CUENTA
        a(class="waves-effect waves-light btn", href="https://m.me/217304995439503") CHATEAR CON UN ASISTENTE
        a(class="waves-effect waves-light btn", href="https://m.me/217304995439503") HABLAR CON UN ASESOR
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
.padding-none {
  padding: 0 !important;
}
.menu {
  width: 100%;
  display: flex;
  align-content: center;
  justify-content: center;
  flex-wrap: wrap;
  padding: 0 2vw;
}
.menu img {
  margin-top: 6vh;
  width: 60%;
  height: 100%;
}
.menu h4 {
  font-family: 'Open Sans', sans-serif;
  font-size: 18px;
  font-weight: 800;
  color: #1772a7;
}
.menu a{
  width: 100%;
  background-color: #7fc7f1;
  margin: 1.5vh auto;
}
</style>