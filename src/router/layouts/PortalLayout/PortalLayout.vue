<template>
  <div class="main-container">
    <LogoutButton />
    <router-view />
  </div>
</template>

<script setup lang="ts">
import LogoutButton from "@/components/LogoutButton";
</script>

<style scoped lang="sass">
@import "./PortalLayout.scss"
</style>
