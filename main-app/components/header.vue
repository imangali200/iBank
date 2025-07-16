<template>
    <div class="tw-flex tw-items-center tw-justify-center tw-px-4">
        <div v-if="rewidth !== '430'" class="tw-max-w-[400px] tw-w-full tw-bg-[#3629B7] tw-z-1">
            <div class="tw-flex tw-justify-between tw-items-center tw-px-2 tw-pb-3 tw-h-[120px]">
                <div class="tw-flex tw-gap-3 tw-items-center ">
                    <img class="tw-w-[50px] tw-h-[50px]" src="../public/man.png" alt="">
                    <h1 class="tw-text-base tw-text-white">Hi, Push Puttichai</h1>
                </div>
                <img class="tw-w-[26px] tw-h-[28px]" src="../public/message.png" alt="">
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref,onMounted } from 'vue';
const rewidth = ref('')
onMounted(() => {
  window.addEventListener("message", (event) => {
    if (event.data.action === "resize") {
      rewidth.value = event.data.width;
    }
  });
});
</script>

<style scoped>

</style>