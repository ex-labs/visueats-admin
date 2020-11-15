<template>
  <div class="hello">
    <h1 class="f1 ph5">Welcome to the visuEats <span class="underline">{{ msg }}</span> Dashboard</h1>
    <!-- p>
      Are you a Restaurant owner?<br>
    </p -->
    <h3>Download the Mobile App</h3>
    <ul>
      <li>Apple App Store Icon</li>
      <li>Google Play Icon</li>
    </ul>
    <div style="position:absolute; width:100%; bottom: 10px;">
      <p style="font-size:12px">Admin resource: <a href="http://presenting.xyz/presenting/visueats/" target="_blank" rel="noopener">visuEats Platform documentation</a>. Remove for <span class="fw6">Production</span>.</p>
    </div>
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
