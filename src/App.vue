<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <Aboutus/> -->
    <!-- <Terms/> -->
    <!-- <FAQ/> -->
    <Broker/>
    <!-- <Add_Broker/> -->
  
  </div>
</template>

<script>
// import Aboutus from './components/About_us.vue'
// import Terms  from './components/TermsandCondition.vue'
// import Disclaimer from './components/Disclaimer'
// import Copyright from './components/Copyright'
// import FAQ from "./components/FAQ"
import Broker from "./components/Broker"
// import Add_Broker from './components/Add_Broker'

export default {
  name: 'App',
  components: {
    // Aboutus,
    // Terms
    // Fines
    // Privacy
    // Disclaimer
    // Copyright
    // FAQ
    Broker

    // Add_Broker
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
