import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueEasyLightbox from "vue-easy-lightbox";
import "bootstrap";
import bootstrap from "bootstrap/dist/css/bootstrap.css";

createApp(App)
  .use(store)
  .use(VueEasyLightbox)
  .use(router)
  .mount("#app");
