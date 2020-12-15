<template>
  <div>
    <v-container>
      <v-row v-if="!loading">
        <v-col md="4" v-for="(v, k) in restaurant.menus" :key="k">
          <router-link
            :to="'/restaurants/' + $route.params.restaurantSlug + '/' + v.slug"
            style="text-decoration: none"
          >
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
          </router-link>
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
      loading: true,
    };
  },
  mounted() {
    this.$nextTick(() => {
      var slug = this.$route.params.restaurantSlug;
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
            this.loading = false;
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