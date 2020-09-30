<template>
  <div class="home pt5">
    <img class="pa4 animate__animated animate__bounce" alt="VE logo" src="../assets/ve_color.png">
    <HelloWorld msg="Welcome to the visuEats Admin Panel"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
