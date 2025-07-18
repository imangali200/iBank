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

const url = computed(() => {
  const value = "https://i-bank-ubvt.vercel.app/"+ route.query.url;
  if (typeof value === "string") {
    return value;
  }
});
</script>

<style scoped></style>
