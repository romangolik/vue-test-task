<template>
  <div class="user-list-page df fdc gap30">
    <h1>User List</h1>
    <template v-if="users">
      <SearchField />
      <UsersTable :data="users" />
    </template>
    <div v-else-if="loading">Loading...</div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import {
  LocationQueryValue,
  onBeforeRouteUpdate,
  RouteLocationNormalized,
  RouteLocationNormalizedLoaded,
  useRoute,
} from "vue-router";

import { getUsers, IUser } from "@/services/users";

import UsersTable from "./components/UsersTable";
import SearchField from "./components/SearchField";

const route = useRoute();
const loading = ref(false);
const users = ref<IUser[] | null>(null);

onMounted(() => {
  fetchUsers(route);
});

onBeforeRouteUpdate((to) => {
  fetchUsers(to);
});

async function fetchUsers(
  route: RouteLocationNormalizedLoaded | RouteLocationNormalized
) {
  const searchQuery = route.query.search as LocationQueryValue;
  loading.value = true;
  const usersResponse = await getUsers(searchQuery);
  loading.value = false;
  users.value = usersResponse ?? [];
}
</script>

<style scoped lang="sass">
@import "./UserList.scss"
</style>
