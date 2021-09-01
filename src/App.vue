<template>
  <Navbar />
  <div v-if="!isHome">
    <Breadcrumbs />
  </div>
  <main id="main">
    <router-view />
  </main>
</template>

<script>
import "@/assets/style.css";
import Navbar from "./components/layouts/Navbar.vue";
import Breadcrumbs from "./components/Breadcrumbs.vue";

export default {
  components: {
    Navbar,
    Breadcrumbs,
  },
  computed: {
    isHome() {
      return this.$route.name === "Home";
    },
  },
};
</script>

<style>
#navbar ul li a.router-link-exact-active {
  color: #f03c02;
}
</style>
