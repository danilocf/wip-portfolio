import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import AuthRoutes from "../modules/Auth/Auth.routes";

Vue.use(VueRouter);

const routes = [
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

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
