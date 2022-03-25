import { createRouter, createWebHistory } from "vue-router";
import RedPage from "@/pages/RedPage";
import YellowPage from "@/pages/YellowPage";
import GreenPage from "@/pages/GreenPage";

const routes = [
  {
    name: "red",
    path: "/red",
    component: RedPage,
  },
  {
    name: "yellow",
    path: "/yellow",
    component: YellowPage,
  },
  {
    name: "green",
    path: "/green",
    component: GreenPage,
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL),
});

export default router;
