import { LoginType } from "./types/login.type";

const LOCAL_STOREGE_KEY = "user";

export function login(data: LoginType) {
  localStorage.setItem(LOCAL_STOREGE_KEY, JSON.stringify(data));
}

export function logout() {
  localStorage.removeItem(LOCAL_STOREGE_KEY);
}

export function checkAuth() {
  return !!localStorage.getItem(LOCAL_STOREGE_KEY);
}

export { LoginType };
