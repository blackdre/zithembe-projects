<template>
  <!-- ======= Hero Section ======= -->
  <section id="hero">
    <div id="heroCarousel">
      <div class="carousel-inner" role="listbox">
        <!-- Slide 1 -->
        <div
          class="carousel-item active"
          style="background-image: url(assets/img/slide/slide-1.jpg)"
        >
          <div class="carousel-container">
            <div class="carousel-content animate__animated animate__fadeInUp">
              <h2>Welcome to <span>Zithembe E & I Projects</span></h2>
              <p>we are a</p>
              <div class="text-center">
                <a href="" class="btn-get-started">Read More</a>
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
</style>
