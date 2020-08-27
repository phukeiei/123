<template>
  <div class="app">
    <v-btn color="red" to="/">Back to Login</v-btn>
    <h1>DashBoard</h1>
    <div class="dashboard">
      <Avatar :username="this.$store.state.form.username" job="นักศึกษา" />
      <h2>form</h2>
      {{this.$store.state.form}}
      <hr />
      <h2>routes</h2>
      {{this.$store.state.routes}}
      <hr />
      <h2>successRoutes</h2>
      {{this.$store.state.successRoutes}}
      <hr />
      <a
        v-for="(item, index) in this.$store.state.successRoutes"
        :key="index"
        :href="'http://'+item.fullpath"
        target="_blank"
      >{{item.fullpath}}</a>
      <hr>
      <form action="http://192.168.1.121/server2" method="get">
        <input type="text" name="username" v-model="this.$store.state.form.username">
        <input type="text" name="username" v-model="this.$store.state.form.password">
        <input type="submit" value="go">
      </form>
    </div>
  </div>
</template>

<script>
import Avatar from "@/components/Avatar";
export default {
  components: {
    Avatar,
  },
};
</script>

<style>
</style>