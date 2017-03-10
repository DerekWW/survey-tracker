<template>
  <div>
    <a class="waves-effect waves-light btn-large">Login with Google</a>
    <!-- <button v-on:click="oauthLogins">Google</button> -->

  </div>
</template>

<script>
export default {
  name: 'landing',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
    };
  },
  methods: {

  },
  props: ['loggedOn'],
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

div {
  height: 85vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

</style>
