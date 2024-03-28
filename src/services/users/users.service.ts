import { LocationQueryValue } from "vue-router";

import { baseHttp } from "../baseHttp";

import { IUser } from "./types/user.interface";

const ENDPOINT = "users";

export async function getUsers(
  search: LocationQueryValue
): Promise<IUser[] | undefined> {
  try {
    const params = search ? { q: search } : {};
    const { data } = await baseHttp.get<IUser[]>(ENDPOINT, {
      params,
    });
    return data;
  } catch (error: any) {
    alert(error.message);
  }
}

export async function getUserDetails(id: number): Promise<IUser | undefined> {
  try {
    const { data } = await baseHttp.get<IUser>(`${ENDPOINT}/${id}`);
    return data;
  } catch (error: any) {
    alert(error.message);
  }
}
