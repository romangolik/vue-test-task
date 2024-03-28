<template>
  <InputField
    placeholder="Enter data to search..."
    v-model="searchValue"
    @update:model-value="handleInputUpdate"
  />
</template>

<script setup lang="ts">
import debounce from "lodash.debounce";
import { onMounted, ref } from "vue";
import { useRouter, useRoute } from "vue-router";

import InputField from "@/components/InputField";

const route = useRoute();
const router = useRouter();
const searchValue = ref("");

onMounted(() => {
  searchValue.value = (route.query.search as string) ?? "";
});

const handleInputUpdate = debounce((value: string) => {
  const search = value.trim();
  router.push({ query: search ? { search } : undefined });
}, 500);
</script>
