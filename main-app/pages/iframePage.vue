<template>
  <div class="tw-flex tw-items-center tw-justify-center tw-relative">
    <iframe class="tw-w-[435px]" :src="url"  height="800"></iframe>
    <NuxtLink to="/" class="tw-absolute tw-top-5 tw-left-50 tw-z-50 tw-mr-[350px]">
      <img
        class="tw-w-[16px] tw-h-[16px]"
        src="../public/leftarrow.png"
        alt=""
      />
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();

const url = computed(() => {
  const value = "https://i-bank-ubvt.vercel.app/" + route.query.url;
  if (typeof value === "string") {
    return value;
  }
});
</script>

<style scoped></style>
