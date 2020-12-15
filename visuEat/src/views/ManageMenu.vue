<template>
  <div class="managemenu">
    <sidebar role="Demo Admin"></sidebar>
    <div class="main-content fl w-80 pa2 vh-100 bg-light-gray">
      <div class="inner-content mw8 center pt4 shadow-1 ve_dark_bg">
        <div class="tl mb3 ph3 white">
          <h1 class="mb0">Manage Menu</h1>
          <p class="mv0">This is the Dashboard home of the <span class="fw6">Menu Admin</span>. Authentication Required.</p>
        </div>
        <div class="w-100">
            <div class="w-100 ve_light_bg bt pv4 ph4 flex" v-for="category in categories" :key="category.Name">
              <div class="w-80 tl">{{ category.Name }}</div>
              <div class="w-20"><i class="material-icons">list</i></div>
            </div>
        </div>
        <div class="w-100">
            <div class="w-100 bg-light-green bt pv4 ph4 flex">
              <div class="w-80 tl"><input type="text" class="w-80 pa3" placeholder="Add Menu Category"></div>
              <div class="w-20"><i class="material-icons">add</i> Add</div>
            </div>
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
      },
  data(){
      return {
        categories: [ 
          { Name: "Appetizer"}, 
          { Name: "Entree" }, 
          { Name: "Dessert" }, 
          { Name: "Beverage" }, 
          { Name: "Crowd Pleaser"}]
      }
    }
  }
</script>
<style scoped>

</style>