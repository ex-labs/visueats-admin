<template>
  <div class="app_roles">
    <sidebar role="Demo Admin"></sidebar>
    <div class="main-content fl w-80 pa2 vh-100 bg-light-gray">
      <p>This is where we <span class="fw6">Manage App Roles</span>. Authentication Required.</p>
      <div class="inner-content mw8 center pt3 ph5 bg-white">
        <div class="inner-heading w-100">
          <h3 class="tl">Assign a New Role</h3>
        </div><!-- /heading -->
        <div class="add-admin tl pb4">
          <input type="text" class="w-60 pa3 dib pa3" placeholder="Enter an Email Address">
          <select class="w-20 dib pa3 bn">
            <option>Admin</option>
            <option>Editor</option>
          </select>
        </div>
        <div class="admin_list bt pv3">
          <p class="i">Fetch and loop through Admin Array</p>
          <div class="admin-item">
          </div>
        </div>
      </div><!-- inner-content -->
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
          AvialableAdmins: [{ name: "Jon Hart", type: "Admin", headshot: null}, { name: "Julie Evans", type: "Editor", headshot: null}]  
        }
      }
    }
</script>
<style scoped>

</style>