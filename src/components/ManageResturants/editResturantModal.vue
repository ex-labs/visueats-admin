<template>
  <v-dialog v-model="show" max-width="500px">
    <v-card v-if="data">
      <!-- the top toolbar  -->
      <v-toolbar dark color="primary">
        <v-btn icon dark @click="show = false">
          <v-icon> close</v-icon>
        </v-btn>
        <v-toolbar-title>Edit {{ data.name }}</v-toolbar-title>
      </v-toolbar>
      <v-card-text class="mt-4">
        <v-form :ref="config.fromRef">
          <v-text-field
            name="name"
            required
            outlined
            label="Name"
            v-model="edit.name"
          ></v-text-field>
          <v-text-field
            name="price"
            required
            outlined
            label="Price"
            v-model="edit.price"
          ></v-text-field>
          <v-text-field
            name="rating"
            required
            type="number"
            label="Rating"
            max="5"
            min="1"
            outlined
            v-model="edit.rating"
          ></v-text-field>
          <v-text-field
            name="tagline"
            required
            outlined
            label="Tagline"
            v-model="edit.tagline"
          ></v-text-field>
          <v-file-input
            accept="image/*"
            @change="handleImageUpload($event, 'logo')"
            label="Change logo Image"
          ></v-file-input>
          <v-img :src="edit.logo"></v-img>

          <v-file-input
            accept="image/*"
            @change="handleImageUpload($event, 'uri')"
            label="Change URI Image"
          ></v-file-input>
          <v-img :src="edit.uri"></v-img>
          <v-btn
            color="success"
            :disabled="loading"
            :loading="loading"
            @click="save"
            block
            >Save</v-btn
          >
        </v-form>
      </v-card-text>
    </v-card>
    <v-card v-else> No thing to show </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: ["showDialog", "data"],
  data() {
    return {
      config: {
        fromRef: "resturantForm",
        parent: "restaurants",
      },
      show: false,
      loading: false,
      edit: {
        name: null,
        price: null,
        rating: null,
        tagline: null,
        logo: null,
        uri: null,
      },
    };
  },
  watch: {
    showDialog(val) {
      this.show = val;
    },
    show(val) {
      this.$emit("closeModal", val);
    },
    data: {
      immediate: true,
      handler(val) {
        if (val) {
          this.edit.name = val.name;
          this.edit.price = val.price;
          this.edit.rating = val.rating;
          this.edit.tagline = val.tagline;
          this.edit.uri = val.uri;
          this.edit.logo = val.logo;
        }
      },
    },
  },
  methods: {
    handleImageUpload(file, dest) {
      var reader = new FileReader();
      reader.readAsDataURL(file);
      var that = this;
      reader.onload = function () {
        console.log(reader.result);
        that.edit[dest] = reader.result;
      };
      reader.onerror = function (error) {
        console.log("Error: ", error);
      };
    },

    isLocalImage(i) {
      return i.includes("https://firebasestorage.googleapis.com/")
        ? false
        : true;
    },
    async save() {
      if (this.$refs[this.config.fromRef].validate()) {
        this.loading = true;
        var logoURL = null;
        var uri = null;
        if (this.isLocalImage(this.edit.logo)) {
          try {
            logoURL = await this.$store.dispatch("uploadImageAndGetURL", {
              base64: this.edit.logo,
              parent: this.config.parent,
              type: "logo",
              name: this.edit.name,
            });
          } catch (err) {
            alert(err.message);
            return;
          }
        }

        if (this.isLocalImage(this.edit.uri)) {
          try {
            uri = await this.$store.dispatch("uploadImageAndGetURL", {
              base64: this.edit.uri,
              parent: this.config.parent,
              type: "uri",
              name: this.edit.name,
            });
          } catch (err) {
            alert(err.message);
            return;
          }
        }

        // put the url in the object
        var o = this.edit;

        if (logoURL) {
          o["logo"] = logoURL;
        }
        if (uri) {
          o["uri"] = uri;
        }
        this.$fb
          .database()
          .ref(this.config.parent + "/" + this.data.id)
          .update(o)
          .then(() => {
            this.loading = false;
            this.show = false;
          })
          .catch((err) => {
            this.loading = false;

            alert(err.message);
          });
      }
    },
  },
};
</script>

<style>
</style>