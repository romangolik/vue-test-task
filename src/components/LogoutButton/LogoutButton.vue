<template>
  <Button @click="handleLogout">LogOut</Button>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";

import { logout } from "@/services/auth";

import Button from "@/components/Button";

import { Routes } from "@/router/routes";

const router = useRouter();

function handleLogout() {
  logout();
  router.push(Routes.login());
}
</script>
