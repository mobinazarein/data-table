import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    redirect: "/calculation",
    children: [
      {
        name: "calculation",
        path: "calculation",
        component: () => import("../src/pages/CalculationPage.vue"),
      },
      //   {
      //     name: "records",
      //     path: "records",
      //     component: () => import("./layout/savabegh.vue"),
      //   },
    ],
  },
];
export default createRouter({
  history: createWebHistory(),
  routes,
});
