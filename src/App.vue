<template>
  <div id="app">
    <navbar></navbar>
    <main>
      <router-view></router-view>
    </main>
    <foot></foot>
  </div>
</template>

<script>

import navbar from './components/Navbar';
import foot from './components/Footer';


export default {
  name: 'app',
  components: {
    navbar,
    foot,
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  box-sizing: border-box;
  width: 100%;
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  flex: 1 0 auto;
}

body {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}

main {
  flex: 1 0 auto;
}
</style>
