<template>
  <Navbar />
  <div v-if="!isHome">
    <Breadcrumbs />
  </div>
  <main id="main">
    <router-view v-slot="{ Component }">
      <transition name="scale-slide">
        <component :is="Component" />
      </transition>
    </router-view>
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

.scale-slide-enter-active,
.scale-slide-leave-active {
  position: absolute;
  transition: all 0.95s ease;
}

.scale-slide-enter-from {
  left: -100%;
}

.scale-slide-enter-to {
  left: 0%;
}

.scale-slide-leave-from {
  transform: scale(1);
}

.scale-slide-leave-to {
  transform: scale(0.8);
}
</style>
