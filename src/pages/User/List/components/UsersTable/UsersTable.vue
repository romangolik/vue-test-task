<template>
  <table class="table">
    <thead class="table__head">
      <tr class="table__row table__row_head">
        <th class="table__cell table__cell_head">Name</th>
        <th class="table__cell table__cell_head">Email</th>
        <th class="table__cell table__cell_head">Phone</th>
        <th class="table__cell table__cell_head">Company</th>
        <th class="table__cell table__cell_head">Address</th>
      </tr>
    </thead>
    <tbody class="table__body">
      <template v-if="data.length > 0">
        <UsersTableRow v-for="user in data" :key="user.id" :user="user" />
      </template>
      <tr v-else class="table__row table__row_empty">
        <td colspan="5" class="table__cell">Data Not Found</td>
      </tr>
    </tbody>
  </table>
</template>

<script setup lang="ts">
import { IUser } from "@/services/users";

import UsersTableRow from "./components/UsersTableRow";

defineProps<{ data: IUser[] }>();
</script>

<style lang="sass">
@import "./UsersTable.scss"
</style>
