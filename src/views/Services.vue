<template>
  <!-- ======= Services Section ======= -->
  <section id="services" class="services">
    <div class="container">
      <div class="row">
        <div
          class="col-lg-4 col-md-6"
          v-for="service in services"
          :key="service.id"
        >
          <div class="icon-box" data-aos="fade-up">
            <div class="icon"><i class="bi bi-plug-fill"></i></div>
            <h4 class="title">
              <a href="">{{ service.title }}</a>
            </h4>
            <p class="description">
              {{ service.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      services: [
        {
          id: 1,
          title: "Instrumentation",
          description:
            "Instrumentation Components Supply, installation & Maintainance",
        },
        {
          id: 2,
          title: "Solar",
          description:
            "Supply, Wiring and installation of electrical Panel's Supply",
        },
        {
          id: 3,
          title: "Fault Finding",
          description: "Conveyor belts safety devices installation and wiring",
        },
        {
          id: 4,
          title: "Motors",
          description: "Electrical Motors Supply and installation",
        },
      ],
    };
  },
};
</script>

<style>
</style>