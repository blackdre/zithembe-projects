<template>
  <!-- ======= Top Bar ======= -->
  <section id="topbar" class="d-flex align-items-center">
    <div
      class="container d-flex justify-content-center justify-content-md-between"
    >
      <div class="contact-info d-flex align-items-center">
        <i class="bi bi-envelope d-flex align-items-center"
          ><a href="mailto:info@zithembe-projects.co.za"
            >info@zithembe-projects.co.za</a
          ></i
        >
        <i class="bi bi-phone d-flex align-items-center ms-4"
          ><span>‎+27 13 692 3144</span></i
        >
      </div>
      <div class="social-links d-none d-md-flex align-items-center">
        <a href="#" class="twitter"><i class="bi bi-twitter"></i></a>
        <a href="#" class="facebook"><i class="bi bi-facebook"></i></a>
        <a href="#" class="instagram"><i class="bi bi-instagram"></i></a>
        <a href="#" class="linkedin"><i class="bi bi-linkedin"></i></a>
      </div>
    </div>
  </section>

  <!-- ======= Header ======= -->
  <header id="header" class="d-flex align-items-center">
    <div class="container d-flex justify-content-between">
      <div class="logo">
        <h1 class="text-light">
          <router-link to="/">Zithembe Projects</router-link>
        </h1>
      </div>

      <nav id="navbar" class="navbar">
        <ul>
          <li>
            <router-link to="/">Home</router-link>
          </li>
          <li><router-link to="/about">About</router-link></li>
          <li><router-link to="/services">Services</router-link></li>
          <li><router-link to="/portfolio">Portfolio</router-link></li>
          <li><router-link to="/contact">Contact</router-link></li>
        </ul>
        <i class="bi bi-list mobile-nav-toggle"></i>
      </nav>
      <!-- .navbar -->
    </div>
  </header>
  <!-- End Header -->
</template>

<script>
export default {};
</script>

<style>
</style>