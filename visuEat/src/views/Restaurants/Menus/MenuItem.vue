<template>
  <div>
    <v-container>
      <v-row v-if="!loading">
        <v-col md="4" v-for="(v, k) in menu.items" :key="k">
       
            <v-card>
              <v-card-title primary-title> {{ v.name }}</v-card-title>
              <v-card-text>
                <img
                  :src="v.image"
                  width="200"
                  height="200"
                  style="object-fit: cover; object-position: center"
                />
              </v-card-text>
            </v-card>
       
        </v-col>
      </v-row>
      <v-row v-else>
        <v-col>
          <v-progress-circular
            indeterminate
            size="70"
            color="primary"
          ></v-progress-circular>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      restaurant: null,
      menu: null,
      loading: true,
    };
  },
  mounted() {
    this.$nextTick(() => {
      var slug = this.$route.params.restaurantSlug;
      var menuSlug = this.$route.params.menuSlug;
      // this will get only the first matching record in the database which matched with the slug
      this.$fb
        .database()
        .ref("restaurants")
        .orderByChild("slug")
        .equalTo(slug)
        .limitToFirst(1)
        .once("value", (snap) => {
          var restaurant = snap.val();
          if (restaurant) {
            //  record found
            // setting the first restaurant
            this.restaurant = restaurant[Object.keys(restaurant)[0]];
            //getting the first manu matchin to the slug
            var menu = null;
            if (this.restaurant.menus) {
              var arr = this.restaurant.menus;
              for (var i in arr) {
                if (arr[i].slug && arr[i].slug == menuSlug) {
                  menu = arr[i];
                  break;
                }
              }
              if (menu) {
                this.menu = menu;
                this.loading = false;
              } else {
                this.$router.push("/restaurants");
              }
            } else {
              this.$router.push("/restaurants");
            }
          } else {
            // slug is expired OR undefined
            // go back to restaurants
            this.$router.push("/restaurants");
          }
        });
    });
  },
};
</script>

<style>
</style>