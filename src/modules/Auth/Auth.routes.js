import Auth from "./Auth.template.vue";

export default [
  {
    path: "/auth",
    name: "Auth",
    component: Auth,
    children: [
      {
        path: "",
        name: "Auth_Index",
        component: () =>
          import(/* webpackChunkName: "Auth_Index" */ "./views/Index.vue")
      }
    ]
  }
];
