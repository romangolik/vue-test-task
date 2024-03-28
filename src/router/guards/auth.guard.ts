import { checkAuth } from "@/services/auth";

import { Routes } from "../routes";

export function authGuard() {
  if (!checkAuth()) return { path: Routes.login() };
}
