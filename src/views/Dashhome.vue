<template>
  <div class="demo">
    <sidebar role="Demo Admin"></sidebar>
    <div class="main-content fl w-80 pa2 vh-100 bg-light-gray">
      <div class="mw8 center tl mb3">
        <!-- todo : capitalize name -->
        <h1 class="mb0">
          Welcome:
          <span class="capitalize">{{ getUser ? getUser.name : "" }}</span>
        </h1>
        <p class="mv0">
          This is the Dashboard home of the <span class="fw6">Menu Admin</span>.
          No Authentication Required.
        </p>
      </div>
      <div class="inner-content mw8 center pt1 flex">
        <div class="w-50 pr2">
          <AppRolesWidget class="bg-white pa4 mb2"></AppRolesWidget>
          <DesignStudioWidget class="bg-white pa4"></DesignStudioWidget>
        </div>
        <!-- /col -->
        <div class="w-50 pl2">
          <ManagePagesWidget class="bg-white pa4 h-100"></ManagePagesWidget>
        </div>
        <!-- /col -->
      </div>
    </div>
  </div>
</template>
<script>
import Sidebar from "../components/Sidebar.vue";
import AppRolesWidget from "../components/AppRolesWidget.vue";
import ManagePagesWidget from "../components/ManagePagesWidget.vue";
import DesignStudioWidget from "../components/DesignStudioWidget.vue";

export default {
  components: {
    Sidebar,
    AppRolesWidget,
    ManagePagesWidget,
    DesignStudioWidget,
  },
};
</script>
<style scoped>

</style>