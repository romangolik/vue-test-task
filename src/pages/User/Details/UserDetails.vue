<template>
  <div class="user-details-page df fdc gap20">
    <RouterLink :to="Routes.users()">{{ "<-- Back to user list" }}</RouterLink>
    <template v-if="user">
      <div class="df fdc gap10">
        <h2>User overview</h2>
        <p>Name: {{ user.name }}</p>
        <p>Username: {{ user.username }}</p>
        <p>Email: {{ user.email }}</p>
        <p>Phone: {{ user.phone }}</p>
        <p>Company name: {{ user.company.name }}</p>
      </div>
      <div class="df fdc gap10">
        <h2>User address</h2>
        <p>city: {{ user.address.city }}</p>
        <p>Street: {{ user.address.street }}</p>
        <p>Suite: {{ user.address.suite }}</p>
        <p>ZipCode: {{ user.address.zipcode }}</p>
      </div>
    </template>
    <div v-else-if="loading">Loading...</div>
    <div v-else>No Data</div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onBeforeMount } from "vue";
import { useRoute, RouterLink, onBeforeRouteUpdate } from "vue-router";

import { IUser, getUserDetails } from "@/services/users";

import { Routes } from "@/router/routes";

const route = useRoute();
const loading = ref(false);
const user = ref<IUser | undefined>(undefined);

const userId = computed(() => +route.params.id);

onBeforeMount(async () => {
  fetchUserDetails();
});

onBeforeRouteUpdate(async () => {
  fetchUserDetails();
});

async function fetchUserDetails() {
  loading.value = true;
  user.value = await getUserDetails(userId.value);
  loading.value = false;
}
</script>

<style scoped lang="sass">
@import "./UserDetails.scss"
</style>
