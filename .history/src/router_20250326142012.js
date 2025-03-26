const routes = [
  {
    path: "/",
    redirect: "/calculation", // مسیر پیش‌فرض به محاسبه هدایت شود
  },
  {
    name: "calculation",
    path: "/calculation",
    component: () => import("../src/pages/CalculationPage.vue"),
  },
  {
    name: "history",
    path: "/history",
    component: () => import("../src/pages/HistoryPage.vue"),
  },
  {
    name: "renewal-bag",
    path: "/renewal-bag",
    component: () => import("../src/pages/RenewalBagPage.vue"),
  },
  {
    name: "transfer-check",
    path: "/transfer-check",
    component: () => import("../src/pages/TransferCheckPage.vue"),
  },
  {
    name: "advance-check",
    path: "/advance-check",
    component: () => import("../src/pages/AdvanceCheckPage.vue"),
  },
  {
    name: "commission-77",
    path: "/commission-77",
    component: () => import("../src/pages/Commission77Page.vue"),
  },
  {
    name: "waste-contracts",
    path: "/waste-contracts",
    component: () => import("../src/pages/WasteContractsPage.vue"),
  },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
