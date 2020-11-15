<template>
  <div class="home pt5">
    <img class="pv4 w-25 animate__animated animate__bounce" alt="VE logo" src="../assets/ve_color.png">
    <HelloWorld msg="myMenu"/>
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
