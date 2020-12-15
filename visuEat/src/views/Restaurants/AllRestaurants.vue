<template>
  <div>
    <v-container fluid>
      <v-row v-if="!loading">
        <v-col md="4" v-for="(v, k) in restaurants" :key="k">
          <router-link
            :to="'/restaurants/' + v.slug"
            style="text-decoration: none"
          >
            <v-card
              :style="{ 'background-image': 'url(' + v.uri + ')' }"
              style="background-size: cover; background-position: center"
            >
              <v-card-title class="bg-white" primary-title>
                {{ v.name }}</v-card-title
              >
              <v-card-text>
                <img :src="v.logo" width="200" height="200" />
                <p class="bg-white">{{ v.tagline }}</p>
              </v-card-text>
              <v-card-actions>
                <div class="w-100 bg-white">
                  <v-rating
                    readonly
                    color="yellow darken-3"
                    half-increments
                    :value="parseInt(v.rating)"
                  ></v-rating>
                  <h5>{{ v.price }}</h5>
                </div>
              </v-card-actions>
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
      restaurants: [],
      loading: true,
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.$fb
        .database()
        .ref("/restaurants")
        .once("value", (snap) => {
          console.log(snap.val());
          var tempArr = [];
          let restaurants = snap.val();
          for (var restaurant in restaurants) {
            var o = {};
            o = restaurants[restaurant];
            // o.id = restaurant                     uncommit it if you need id with the payload
            tempArr.push(o);
          }
          this.restaurants = tempArr;
          this.loading = false;
        });
    });
  },
};
</script>

<style>
</style>