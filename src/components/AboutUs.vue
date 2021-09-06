<template>
  <div class="row no-gutters">
    <div
      class="
        image
        col-xl-5
        d-flex
        align-items-stretch
        justify-content-center justify-content-lg-start
      "
      data-aos="fade-right"
    ></div>
    <div class="col-xl-7 ps-0 ps-lg-5 pe-lg-1 d-flex align-items-stretch">
      <div class="content d-flex flex-column justify-content-center">
        <h3 data-aos="fade-up" v-for="i in about" :key="i.id">{{ i.title }}</h3>
        <p data-aos="fade-up" v-for="i in about" :key="i.body">
          {{ i.body }}
        </p>
      </div>
      <!-- End .content-->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      about: [
        {
          id: 1,
          title: "About Us",
          body: "Zithembe E & I projects has significant experience in delivering complete electrical projects to major operators around the world, onshore and offshore. Our clients include world-leading companies from the chemicals, oil & gas and energy industries. We understand the challenges these industries face today: they need to reduce operational costs, maximize uptime and optimize maintenance efficiency",
        },
      ],
      // image: [
      //   fetch("")
      // ]
    };
  },
};
</script>

<style>
</style>