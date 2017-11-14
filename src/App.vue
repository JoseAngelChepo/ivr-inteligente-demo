<template lang="pug">
  #app
    router-view
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Open+Sans:400,600,700,800');
.padding-none {
  padding: 0 !important;
}

</style>
