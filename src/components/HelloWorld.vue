<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      This is the pre-production <span>Admin Panel</span> MVAP that is being built upon for<br>
      subsequent launch to production as part of version 1.0.0 of the application suite.<br>
      See: <a href="http://presenting.xyz/presenting/visueats/" target="_blank" rel="noopener">visuEats Platform documentation</a>.
    </p>
    <h3>This is a Vue.JS App - Installed CLI Plugins</h3>
    <ul>
      <li>Vuex</li>
      <li>Vue Router</li>
      <li>Firebase</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
