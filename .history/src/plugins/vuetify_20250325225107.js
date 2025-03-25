// Styles
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

// Vuetify
import { createVuetify } from "vuetify";

export default createVuetify({
  defaults: {
    global: {
      rtl: true,
    },
    VApp: {
      style: "font-family: 'IRANSans', sans-serif !important;",
    },
  },
});
