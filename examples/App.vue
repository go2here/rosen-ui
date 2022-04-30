<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <Demo />
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {},
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
.footer {
  font-size: 12px;
  padding: 0 8px;
  text-align: left;
}
.level {
  color: #9199a1;
  margin-bottom: 8px;
}
.price {
  color: #f01414;
}
.footer-spring {
  display: flex;
  justify-content: space-between;
  padding: 0 8px;
  font-size: 12px;
}
</style>
