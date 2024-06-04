import { createWebHistory, createRouter } from "vue-router";
import LandingPage from "../components/landing_page.vue";
import Login from "../components/login.vue";
import MainSidebar from "../components/sidebar/main.vue";
import Dashboard from "../components/sidebar/dashboard.vue";
import Datadomba from "../components/sidebar/datadomba.vue";
import Transaksi from "../components/sidebar/transaksi.vue";
import Pakan from "../components/sidebar/pakan.vue";
import Hitung from "../components/sidebar/hitung.vue";
import Arsip from "../components/sidebar/arsip.vue";
import Anggota from "../components/sidebar/anggota.vue"

const routes = [
  {
    path: "/",
    component: LandingPage
  },
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/mainsidebar",
    component: MainSidebar,
    children: [
      {
        path: "dashboard",
        component: Dashboard
      },
      {
        path: "datadomba",
        component: Datadomba
      },
      {
        path: "transaksi",
        component: Transaksi
      },
      {
        path: "pakan",
        component: Pakan
      },
      {
        path: "hitung",
        component: Hitung
      },
      {
        path: "arsip",
        component: Arsip
      },
      {
        path: "anggota",
        component: Anggota
      }
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
