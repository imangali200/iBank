<template>
  <div class="tw-flex tw-items-center tw-justify-center">
    <iframe
      class="tw-w-[435px] tw-overflow-y-auto"
      :src="url"
      height="800"
    ></iframe>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";

const route = useRoute();
const config = useRuntimeConfig();
console.log("this is config");

console.log("meta", import.meta.env.VITE_BASE_URL);

const url = computed(() => {
  const value = import.meta.env.VITE_BASE_URL + route.query.url;
  if (typeof value === "string") {
    return value;
  }
});
</script>

<style scoped></style>
