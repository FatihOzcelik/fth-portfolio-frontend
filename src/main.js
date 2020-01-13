import Vue from "vue";
import App from "./App.vue";
import router from "./router";

Vue.component("NavBar", require("./components/NavBar.vue").default);
Vue.component("LandingHero", require("./components/LandingHero.vue").default);
Vue.component("About", require("./components/About.vue").default);
Vue.component("ParticlesLanding", require("./components/ParticlesLanding.vue").default);
Vue.component("ContactForm", require("./components/ContactForm.vue").default);


Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
