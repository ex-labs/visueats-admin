<template>
  <div class="designstudio">
    <sidebar role="Demo Admin"></sidebar>
    <div class="main-content fl w-80 pa2 vh-100 bg-light-gray">
      <p>This is where we <span class="fw6">Customizable Styles</span>. Authentication Required.</p>
      <div class="inner-content mw8 center pt4 flex bg-white">
        <div class="w-100 tc pv4">
          <p class="f2">Updating...</p>
        </div><!-- /col -->
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