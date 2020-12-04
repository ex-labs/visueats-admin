<template>
  <div class="managemenu">
    <sidebar role="Demo Admin"></sidebar>
    <div class="main-content fl w-80 pa2 vh-100 bg-light-gray">
      <div class="inner-content mw8 center pt4 shadow-1 ve_dark_bg">
        <div class="tl mb3 ph3 white">
          <h1 class="mb0">Manage Resturant</h1>
          <p class="mv0">
            This is the Dashboard home of the
            <span class="fw6">Super Admin</span> Authentication Required.
          </p>
        </div>
        <div class="w-100">
          <div
            class="w-100 ve_light_bg bt pv4 ph4 flex"
            v-for="(resturant, k) in resturants"
            :key="k"
          >
            <div class="w-80 tl">{{ resturant.name }}</div>
            <div class="w-20">
              <v-btn icon>
                <i class="material-icons" @click="setResturantEdit(resturant)"
                  >edit</i
                ></v-btn
              >

              &nbsp;
              <v-btn icon>
                <i class="material-icons" @click="setResturant(resturant)"
                  >list</i
                ></v-btn
              >
            </div>
          </div>
        </div>
        <!-- <div class="w-100">
              <div class="w-100 bg-light-green bt pv4 ph4 flex">
                <div class="w-80 tl">
                  <input
                    type="text"
                    class="w-80 pa3"
                    placeholder="Add Menu Category"
                  />
                </div>
                <div class="w-20"><i class="material-icons">add</i> Add</div>
                    </div>
                </div> -->
      </div>
    </div>
    <v-app>
      <v-dialog
        v-model="openResturantManageDialog"
        fullscreen
        hide-overlay
        transition="dialog-bottom-transition"
      >
        <v-card>
          <!-- the top toolbar  -->
          <v-toolbar dark color="primary">
            <v-btn icon dark @click="openResturantManageDialog = false">
              <v-icon> close</v-icon>
            </v-btn>
            <v-toolbar-title>Settings</v-toolbar-title>
          </v-toolbar>
          <!-- the main content -->
          <v-expansion-panels v-if="currentResturant">
            <v-expansion-panel
              v-for="(menu, i) in currentResturant.menus"
              :key="i"
            >
              <v-expansion-panel-header>
                {{ menu.name }}
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                <v-list class="text-left">
                  <v-list-item>
                    <v-btn text block @click="setMenuEdit(menu, i)">
                      <i class="material-icons">edit</i>Menu</v-btn
                    >
                  </v-list-item>
                  <v-list-item
                    three-line
                    v-for="(item, j) in menu.items"
                    :key="j"
                  >
                    <v-list-item-avatar>
                      <img height="150px" width="150px" :src="item.image" />
                    </v-list-item-avatar>
                    <v-list-item-content>
                      <v-list-item-title>{{ item.name }}</v-list-item-title>
                      <v-list-item-subtitle>
                        {{ item.description }}
                      </v-list-item-subtitle>
                      <v-list-item-subtitle>
                        Price : {{ item.price }}
                      </v-list-item-subtitle>
                      <v-list-item-action>
                        <v-btn @click="setMenuItemEdit(item, j, menu, i)">
                          Edit
                        </v-btn>
                      </v-list-item-action>
                    </v-list-item-content>
                  </v-list-item>
                </v-list>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-card>
      </v-dialog>
      <edit-resturant-modal
        :data="resturantEdit"
        :showDialog="openResturantEditDialog"
        @closeModal="openResturantEditDialog = $event"
      />
      <edit-menu-modal
        :data="menuEdit"
        :showDialog="openMenuEditDialog"
        @closeModal="openMenuEditDialog = $event"
        :currentResturant="currentResturant"
      />
      <edit-menu-item-modal
        :data="menuItemEdit"
        :showDialog="openMenuItemEditDialog"
        @closeModal="openMenuItemEditDialog = $event"
        :currentResturant="currentResturant"
      />
    </v-app>
  </div>
</template>

<script>
import Sidebar from "../components/Sidebar.vue";
import EditResturantModal from "../components/ManageResturants/editResturantModal";
import EditMenuModal from "../components/ManageResturants/editMenuModal";
import EditMenuItemModal from "../components/ManageResturants/editMenuItemModal";

export default {
  components: {
    Sidebar,
    EditResturantModal,
    EditMenuModal,
    EditMenuItemModal,
  },
  data() {
    return {
      openResturantManageDialog: false,
      openResturantEditDialog: false,
      openMenuEditDialog: false,
      openMenuItemEditDialog: false,
      resturants: [
        { name: "Appetizer" },
        { name: "Entree" },
        { Name: "Dessert" },
        { Name: "Beverage" },
        { Name: "Crowd Pleaser" },
      ],
      currentResturant: null,
      resturantEdit: null,
      menuEdit: null,
      menuItemEdit: null,
    };
  },
  methods: {
    setResturant(r) {
      this.currentResturant = r;
      this.openResturantManageDialog = true;
    },
    setResturantEdit(r) {
      console.log(r);
      this.resturantEdit = r;
      this.openResturantEditDialog = true;
    },
    setMenuEdit(m, i) {
      m["id"] = i;
      this.menuEdit = m;
      this.openMenuEditDialog = true;
    },
    setMenuItemEdit(item, itemId, menu, menuId) {
      item["id"] = itemId;
      item["menuId"] = menuId;
      this.menuItemEdit = item;
      this.openMenuItemEditDialog = true;
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.$fb
        .database()
        .ref("restaurants")
        .on("value", (snap) => {
          var data = snap.val();
          var arr = [];
          for (var i in data) {
            var o = Object.assign({}, data[i]);
            o.id = i;
            arr.push(o);
          }
          this.resturants = arr;
        });
    });
  },
};
</script>

<style scoped>
</style>