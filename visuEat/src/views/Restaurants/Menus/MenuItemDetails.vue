<template>
  <div>
   

    <v-card>
      <v-card-title primary-title> {{ item.name }}</v-card-title>
      <v-card-text>
        <img
          :src="item.image"
          width="200"
          height="200"
          style="object-fit: cover; object-position: center"
        />
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      restaurant: null,
      menu: null,
      item: null,
      loading: true,
    };
  },
  mounted() {
    this.$nextTick(() => {
      var slug = this.$route.params.restaurantSlug;
      var menuSlug = this.$route.params.menuSlug;
      var itemSlug = this.$route.params.itemSlug;

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
                var item;
                var itemsArray = menu.items;
                console.log("items ", itemsArray);
                for (var j in itemsArray) {
                  if (itemsArray[j].slug && itemsArray[j].slug == itemSlug) {
                    item = itemsArray[j];
                    break;
                  }
                }
                this.item = item;
                this.loading = false;
              } else {
                console.log("the slug from item is not found");

                this.$router.push("/restaurants");
              }
            } else {
              console.log("the slug from menu is not found");

              this.$router.push("/restaurants");
            }
          } else {
            // slug is expired OR undefined
            // go back to restaurants
            console.log("the slug from resturant is not found");
            this.$router.push("/restaurants");
          }
        });
    });
  },
};
</script>

<style>
</style>