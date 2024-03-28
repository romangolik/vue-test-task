type IdParamType = number | ":id";

export const Routes = {
  root: () => "/",
  login: () => "/login",
  users: () => "/users",
  user: (id: IdParamType = ":id") => `/users/${id}`,
};
