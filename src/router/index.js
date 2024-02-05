import { createRouter, createWebHistory } from "vue-router";

import home from "../views/index.vue";
import tenant from "../views/tenant/TenantView.vue";
const routes = [
  {
    path: "/",
    name: "home",
    component: home,
  },
  // tenants 
  {
    path: "/tenant",
    name: "tenant",
    component: tenant,
    meta: {
      title: "Tenant",
    },
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    window.scrollTo(0, 0);
  },
});
export default router;
