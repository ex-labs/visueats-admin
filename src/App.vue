<template>
  <div id="app">
    <top-nav></top-nav> 
    <router-view />
  </div>
</template>
<script>
import TopNav from "./components/TopNav";

export default {
  components: {
    "top-nav": TopNav, 
  },
};
</script>
<style>
@import "./assets/theme.css";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  /* Nothing to see here */
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #fff;
}
.capitalize {
  text-transform: capitalize;
}
</style>
