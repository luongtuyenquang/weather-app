import { createRouter, createWebHistory } from "vue-router";
import Home from "@/App.vue";
import { NAV_DATA } from "@/global/constants";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/:location",
      name: "nav-router",
      component: Home,
    },
    {
      path: "/",
      redirect: `/${NAV_DATA[0].slug}`,
    },
  ],
});

export default router;
