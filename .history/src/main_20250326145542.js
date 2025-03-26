import { createApp } from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import router from "./router";
// import { loadFonts } from "./plugins/webfontloader";
// import "@/assets/styles/_fonts.scss";
// loadFonts();
import "@/assets/base.scss";

createApp(App).use(vuetify).use(router).mount("#app");
