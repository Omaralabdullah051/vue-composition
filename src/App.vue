<template>
  <LifecycleC/>
</template>

<script>
import LifecycleC from "./components/LifecycleC.vue";

export default {
  name: 'App',
  components: {
     LifecycleC,
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
