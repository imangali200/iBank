<template>
  <div class="tw-flex tw-items-center tw-justify-center tw-px-4">
    <div
      class="tw-max-w-[400px] tw-h-[800px] tw-flex tw-gap-4 tw-flex-col tw-w-full tw-bg-white tw-px-4"
    >
      <img class="tw-mt-[50px]" src="../public/withdrawhero.png" alt="" />
      <div class="tw-flex tw-items-center tw-flex-col tw-gap-3">
        <h2 class="tw-text-[#3629B7] tw-font-semibold tw-text-[16px]">
          Successful withdrawal!
        </h2>
        <p
          class="tw-text-[#343434] tw-text-center tw-text-[14px] tw-font-[500] tw-w-[310px]"
        >
          You have successfully withdrawn money! Please check the balance in the
          card management section.
        </p>
      </div>
      <NuxtLink class="tw-w-full tw-flex tw-items-center tw-mt-[25px]">
        <button
          @click="goToback"
          class="tw-max-w-[357px] tw-h-[44px] tw-w-full tw-mx-auto tw-bg-[#3629B7] tw-text-white tw-rounded-md"
        >
          Confirm
        </button>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
function goToback() {
  window.parent.location.href = "http://localhost:3000";
}
</script>

<style scoped></style>
