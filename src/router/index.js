import { createRouter, createWebHashHistory } from 'vue-router'


const routes = [
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    // ログイン画面
    path: "/login",
    name: "login",
    component: () => import("../views/LoginView.vue"),// ログイン
  },
  {
    path: "/top",
    name: "top",
    component: () => import("../views/TopView.vue"), // トップページ
  },
  {
    path: "/subject",
    name: "subject",
    component: () => import("../views/SubjectView.vue"), // 科目一覧
  },
  {
    path: "/choose",
    name: "choose",
    component: () => import("../views/ChooseSubject.vue"), // 科目選択
  },
  {
    path: "/detail",
    name: "detail",
    component: () => import("../views/SubjectDetail.vue"), // 授業詳細
  },
  {
    path: "/register",
    name: "register",
    component: () => import("../views/RegisterSubject.vue"), // 科目登録
  },
  {
    path: "/student",
    name: "student",
    component: () => import("../views/StudentView.vue"), // 生徒一覧
  },
  {
    path: "/test",
    name: "test",
    component: () => import("../views/TestView.vue"), // 生徒一覧
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
