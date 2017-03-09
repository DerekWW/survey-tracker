<template lang="html">
  <nav>
    <div class="nav-wrapper">
      <router-link to="/" class="brand-logo">Survey Tracker</router-link>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><router-link to="/dashboard">Dashboard</router-link></li>
        <li><router-link to="/">Home</router-link></li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'navbar',
  data() {
    return {

    };
  },
};
</script>

<style lang="css">
</style>
