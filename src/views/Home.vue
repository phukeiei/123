<template>
  <div class="home">
    <h1>{{this.$store.state.form}}</h1>
    <h1>home</h1>
    <h1>{{this.$store.state.routes}}</h1>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {},
};
</script>
