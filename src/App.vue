<template>
  <div id="app">
    <o-header></o-header>
    <router-view/>
    <o-footer></o-footer>
  </div>
</template>

<script>
  import OHeader from './components/OHeader'
  import OFooter from './components/OFooter'
  export default {
    components: { OHeader, OFooter },
    name: 'App'
  }
</script>

<style>
  #app {

  }
</style>
