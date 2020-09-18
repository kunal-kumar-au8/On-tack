<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <Aboutus/> -->
    <!-- <Terms/> -->
    <Privacy/>
  
  </div>
</template>

<script>
// import Aboutus from './components/About_us.vue'
// import Terms  from './components/TermsandCondition.vue'
import Privacy from './components/Privacy'
export default {
  name: 'App',
  components: {
    // Aboutus,
    // Terms
    // Fines
    Privacy
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
