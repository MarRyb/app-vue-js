<template>
  <div>
    <Header> </Header>
    <router-view></router-view>
  </div>
</template>

<script>

import Header from "@/components/Header";

export default {
  name: 'App',
  components: {
    Header
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
  }
  body {
    background-color: #f0f4f8 !important;
  }
</style>
