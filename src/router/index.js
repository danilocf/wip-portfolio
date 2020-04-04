import Vue from "vue";
import VueRouter from "vue-router";
import PageNotFound from "../views/404.vue";
import Home from "../views/Home.vue";
import AuthRoutes from "../modules/Auth/Auth.routes";
import KanbanRoutes from "../modules/Kanban/Kanban.routes";

Vue.use(VueRouter);

const routes = [
  {
    path: "*",
    redirect: '/404'
  },
  {
    path: "/404",
    component: PageNotFound
  },
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "About" */ "../views/About.vue")
  },
  {
    path: "/test",
    name: "Test",
    component: () => import(/* webpackChunkName: "Test" */ "../views/Test.vue")
  }
];

const modules =
  process.env.VUE_APP_MODULES && JSON.parse(process.env.VUE_APP_MODULES);
if (modules.includes("Auth")) {
  routes.push(...AuthRoutes);
}
if (modules.includes("Kanban")) {
  routes.push(...KanbanRoutes);
}

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
