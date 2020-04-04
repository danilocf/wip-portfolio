import Kanban from "./Kanban.template.vue";

export default [
  {
    path: "/kanban",
    name: "Kanban",
    component: Kanban,
    children: [
      {
        path: "",
        name: "Kanban_Index",
        component: () =>
          import(/* webpackChunkName: "Kanban_Index" */ "./views/Index.vue")
      }
    ]
  }
];
