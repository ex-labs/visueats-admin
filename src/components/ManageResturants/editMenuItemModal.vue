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
        <v-form :ref="config.formRef">
          <v-text-field
            name="name"
            required
            outlined
            label="Name"
            v-model="edit.name"
          ></v-text-field>
          <v-text-field
            name="description"
            required
            outlined
            label="description"
            v-model="edit.description"
          ></v-text-field>
          <v-text-field
            name="price"
            required
            outlined
            label="Price"
            v-model="edit.price"
          ></v-text-field>
          <v-text-field
            name="video_url"
            required
            outlined
            label="Video Url"
            v-model="edit.video_url"
          ></v-text-field>

          <v-file-input
            accept="image/*"
            @change="handleImageUpload"
            label="Change  Image"
          ></v-file-input>
          <v-img :src="edit.image"></v-img>
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
  props: ["showDialog", "data", "currentResturant"],
  data() {
    return {
      config: {
        formRef: "MenuItemsForm",
        parent: "menuItems",
      },
      show: false,
      loading: false,
      edit: {
        name: null,
        price: null,
        description: null,
        video_url: null,
        image: null,
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
          this.edit.image = val.image;
          this.edit.price = val.price;
          this.edit.description = val.description;
          this.edit.video_url = val.video_url;
        }
      },
    },
  },
  methods: {
    handleImageUpload(file) {
      var reader = new FileReader();
      reader.readAsDataURL(file);
      var that = this;
      reader.onload = function () {
        console.log(reader.result);
        that.edit.image = reader.result;
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
      if (this.$refs[this.config.formRef].validate()) {
        this.loading = true;
        var imageURL = null;
        if (this.isLocalImage(this.edit.image)) {
          try {
            imageURL = await this.$store.dispatch("uploadImageAndGetURL", {
              base64: this.edit.image,
              parent: this.config.parent,
              type: "menu_item_image",
              name: this.edit.name,
            });
          } catch (err) {
            alert(err);
            return;
          }
        }

        // put the url in the object
        var o = this.edit;
        if (imageURL) {
          o["image"] = imageURL;
        }
        this.$fb
          .database()
          .ref(
            "restaurants/" +
              this.currentResturant.id +
              "/menus/" +
              this.data.menuId +
              "/items/" +
              this.data.id
          )
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