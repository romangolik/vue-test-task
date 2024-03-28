<template>
  <tr class="table__row cup" @click="navigateToUserDetails(user.id)">
    <td class="table__cell">{{ user.name }}</td>
    <td class="table__cell">{{ user.email }}</td>
    <td class="table__cell">{{ user.phone }}</td>
    <td class="table__cell">{{ user.company.name }}</td>
    <td class="table__cell">{{ userAddress }}</td>
  </tr>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useRouter } from "vue-router";

import { IUser } from "@/services/users";

import { Routes } from "@/router/routes";

const props = defineProps<{ user: IUser }>();

const router = useRouter();

const userAddress = computed(() => {
  const { city, street, suite } = props.user.address;
  return `${city} - st. ${street}, ${suite}`;
});

function navigateToUserDetails(id: number) {
  router.push(Routes.user(id));
}
</script>
