<template>
  <div class="settings">
    <sidebar role="Demo Admin"></sidebar>
    <div class="main-content fl w-80 pa2 vh-100 bg-light-gray">
      <p>This is where we update <span class="fw6">Admin Profile</span> and other settings ( headshot, name, email ). Authentication Required.</p>
      <div class="inner-content mw8 center pt4 flex">
        <div class="w-100 tc">
          <p class="f1">CRUD Components go here</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Sidebar from '../components/Sidebar.vue'

export default {
  components: { 
        Sidebar,
      }
    }
</script>
<style scoped>

</style>