import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import 
loadFonts()

createApp(App)
  .use(vuetify)
  .mount('#app')
