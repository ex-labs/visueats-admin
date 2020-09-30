<template>
  <div class="about">
    <sidebar role="Demo Admin"></sidebar>
    <div class="main-content fl w-80 pa2 vh-100 bg-light-gray">
      <p>This is a Dashboard Demo of the <span class="fw6">Main View</span>. No Authentication Required.</p>
      <div class="inner-content mw8 pt4 flex">
        <div class="w-50 pl4 pr2">
          <AppRolesWidget class="bg-white pa4 mb2"></AppRolesWidget>
          <DesignStudioWidget class="bg-white pa4"></DesignStudioWidget>
        </div><!-- /col -->
        <div class="w-50 pl2 pr4">
          <ManagePagesWidget class="bg-white pa4 h-100"></ManagePagesWidget>
        </div><!-- /col -->
      </div>
    </div>
  </div>
</template>
<script>
import Sidebar from '../components/Sidebar.vue'
import AppRolesWidget from '../components/AppRolesWidget.vue'
import ManagePagesWidget from '../components/ManagePagesWidget.vue'
import DesignStudioWidget from '../components/DesignStudioWidget.vue'

export default {
  components: { 
        Sidebar,
        AppRolesWidget,
        ManagePagesWidget,
        DesignStudioWidget
      }
    }
</script>
<style scoped>

</style>