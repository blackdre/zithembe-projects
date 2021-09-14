<template>
  <!-- ======= Hero Section ======= -->
  <section id="hero">
    <div id="heroCarousel">
      <div class="carousel-inner" role="listbox">
        <!-- Slide 1 -->
        <div
          class="carousel-item active"
          style="
            background-image: url(https://pixabay.com/get/g04fc8a8ed591165ad426e6749ee9ed7e87073fbccad88165280eda722d02dac4fb17b3013fd95e51d3c358a6cb58bc18_1920.jpg);
          "
        >
          <div class="carousel-container">
            <div class="carousel-content animate__animated animate__fadeInUp">
              <h2>Welcome to <span>Zithembe E & I Projects</span></h2>
              <p>
                Zithembe projects provides electrical and instrumentation
                engineering and construction services for continuous-production
                plant.
              </p>
              <div class="text-center">
                <router-link to="/about" class="btn-get-started"
                  >Read More</router-link
                >
              </div>
            </div>
          </div>
        </div>
      </div>

      <a
        class="carousel-control-prev"
        href="#heroCarousel"
        role="button"
        data-bs-slide="prev"
      >
        <span
          class="carousel-control-prev-icon bx bx-left-arrow"
          aria-hidden="true"
        ></span>
      </a>

      <a
        class="carousel-control-next"
        href="#heroCarousel"
        role="button"
        data-bs-slide="next"
      >
        <span
          class="carousel-control-next-icon bx bx-right-arrow"
          aria-hidden="true"
        ></span>
      </a>

      <ol class="carousel-indicators" id="hero-carousel-indicators"></ol>
    </div>
  </section>
  <!-- End Hero -->
</template>

<script>
export default {
  name: "Home",
  components: {},
};
</script>

<style scoped>
.carousel-item {
  background-image: url(../assets/hero.jpg) !important;
}
</style>
