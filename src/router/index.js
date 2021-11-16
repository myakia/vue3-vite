import { createRouter, createWebHistory } from "vue-router";

// 路由信息
const routes = [
  {
    path: "/",
    name: "vant",
    component: () => import('@/views/vant.vue'),
  },
  {
    path: "/demo",
    name: "demo",
    component: () => import('@/views/demo.vue'),
  },
  {
    path: "/test",
    name: "test",
    component: () => import('@/views/test.vue'),
  },
];
console.log(routes)

// 导出路由
const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;