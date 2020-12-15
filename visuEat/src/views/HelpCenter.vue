<template>
  <div class="help_center">
    <sidebar role="Demo Admin"></sidebar>
    <div class="main-content fl w-80 pa2 vh-100 bg-light-gray">
      <p>This is the <span class="fw6">Help Center</span>. Authentication Required.</p>
      <div class="inner-content mw8 center pt4 flex">
        <div class="w-100">
          <p>The role and purpose of this view is not yet defined.</p>
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