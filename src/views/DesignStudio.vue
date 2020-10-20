<template>
  <div class="designstudio">
    <sidebar role="Demo Admin"></sidebar>
    <div class="main-content fl w-80 pa2 vh-100 bg-light-gray">
      <p>This is where we <span class="fw6">Customizable Styles</span>. Authentication Required.</p>
      <div class="inner-content mw8 center pt4 flex">
        <div class="w-50 pl4 pr2">
          Col 1
        </div><!-- /col -->
        <div class="w-50 pl2 pr4">
          Col 2
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