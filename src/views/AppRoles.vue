<template>
  <div class="app_roles">
    <sidebar role="Demo Admin"></sidebar>
    <div class="main-content fl w-80 pa2 vh-100 bg-light-gray">
      <p>
        This is where we <span class="fw6">Manage App Roles</span>.
        Authentication Required.
      </p>
      <div class="inner-content mw8 center pt3 ph5 bg-white">
        <div class="inner-heading w-100">
          <h3 class="tl">Assign a New Role</h3>
        </div>
        <!-- /heading -->
        <div class="add-admin tl pb4">
          <input
            type="text"
            class="w-60 pa3 dib pa3"
            placeholder="Enter an Email Address"
          />
          <select class="w-20 dib pa3 bn">
            <option>Admin</option>
            <option>Editor</option>
          </select>
        </div>
        <div class="admin_list bt pv3">
          <p class="i">Fetch and loop through Admin Array</p>
          <ul class="list pl0 mt0 measure center">
            <template v-for="(v, k) in allUsers">
              <li
                :key="k"
                class="flex items-center lh-copy pa3 ph0-l bb b--black-10"
                v-if="v.email != getUser.email"
              >
                <img
                  class="w2 h2 w3-ns h3-ns br-100"
                  src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"
                />
                <div class="pl3 flex-auto">
                  <span class="f6 db black-70">{{ v.name }}</span>
                  <span class="f6 db black-70">{{ v.email }}</span>
                </div>
                <div>
                  <a
                    :class="[
                      'f6 grow no-underline br-pill ph3 pv2 mb2 dib white',
                      { 'bg-black': v.role == 'admin' },
                      { 'bg-green': v.role != 'admin' },
                    ]"
                    :disabled="v.role == 'admin'"
                    @click="makeAdmin(v)"
                  >
                    {{ v.role == "admin" ? "Already admin" : "Make Admin" }}
                  </a>
                </div>
              </li>
            </template>
          </ul>

          <div class="admin-item"></div>
        </div>
      </div>
      <!-- inner-content -->
    </div>
  </div>
</template>
<script>
import Sidebar from "../components/Sidebar.vue";

export default {
  components: {
    Sidebar,
  },
  data() {
    return {
      AvialableAdmins: [
        { name: "Jon Hart", type: "Admin", headshot: null },
        { name: "Julie Evans", type: "Editor", headshot: null },
      ],
      allUsers: [],
    };
  },
  methods: {
    makeAdmin(v) {
      if ((v.role !=  "admin")) {
        this.$fb
          .database()
          .ref("users/" + v.uid)
          .update({ role: "admin" })
          .then(() => {
            alert("attempt Successful");
          })
          .catch((err) => {
            alert("an error occured ! " + err);
          });
      }
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.$fb
        .database()
        .ref("users")
        .on("value", (res) => {
          var d = res.val();
          console.log(d);
          var arr = [];
          for (var key in d) {
            d["uid"] = key;
            arr.push(d[key]);
          }

          this.allUsers = arr;
        });
    });
  },
};
</script>
<style scoped>
</style>