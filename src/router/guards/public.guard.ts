import { checkAuth } from "@/services/auth";

import { Routes } from "../routes";

export function publicGuard() {
  if (checkAuth()) return { path: Routes.root() };
}
