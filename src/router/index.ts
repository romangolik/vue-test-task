import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

import Login from "@/pages/Login";
import UserList from "@/pages/User/List";
import UserDetails from "@/pages/User/Details";

import { authGuard } from "./guards/auth.guard";
import { publicGuard } from "./guards/public.guard";

import { Routes } from "./routes";
import PortalLayout from "./layouts/PortalLayout";

const routes: Array<RouteRecordRaw> = [
  {
    path: Routes.login(),
    beforeEnter: [publicGuard],
    component: Login,
  },
  {
    path: Routes.root(),
    component: PortalLayout,
    beforeEnter: [authGuard],
    redirect: Routes.users(),
    children: [
      {
        path: Routes.users(),
        component: UserList,
      },
      {
        path: Routes.user(),
        component: UserDetails,
      },
    ],
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: Routes.root(),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
