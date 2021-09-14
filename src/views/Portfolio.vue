<template>
  <h1>Portfolio</h1>
  <button @click="showSingle">Show single picture.</button>
  <button @click="showMultiple">Show a group of pictures.</button>
  <VueEasyLightbox
    :visible="visible"
    :imgs="imgs"
    :index="index"
    @hide="handleHide"
  ></VueEasyLightbox>
</template>

<script>
export default {
  data() {
    return {
      visible: false,
      index: 0, // default: 0
      imgs: [
        "https://via.placeholder.com/450.png/",
        "https://via.placeholder.com/300.png/",
        "https://via.placeholder.com/150.png/",
        { src: "https://via.placeholder.com/450.png/", title: "this is title" },
      ],
    };
  },
  methods: {
    showImg(index) {
      this.index = index;
      this.visible = true;
    },
    handleHide() {
      this.visible = false;
    },
  },
};
</script>

<style>
</style>