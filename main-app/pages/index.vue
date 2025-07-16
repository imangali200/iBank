<template>
  <div class="tw-flex tw-items-center tw-justify-center tw-relative tw-px-4">
    <div
      class="tw-max-w-[400px] tw-h-[700px] tw-flex tw-flex-col tw-items-center tw-w-full tw-bg-white tw-rounded-t-[30px] tw-absolute tw-top-[-22px] tw-z-2"
    >
      <img
        v-show="rewidth !== '430'"
        class="tw-max-w-[360px] tw-max-h-[221px] tw-w-full tw-h-full tw-mx-auto"
        src="../public/cart.png"
        alt=""
      />
      <div class="tw-bg-white">
        <iframe
          src="http://localhost:3001/"
          :width="rewidth"
          :height="reHeight"
          frameborder="0"
        >
        </iframe>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
const rewidth = ref("330px");
const reHeight = ref("316px");
onMounted(() => {
  window.addEventListener("message", (event) => {
    if (event.data.action === "resize") {
      rewidth.value = event.data.width;
      reHeight.value = event.data.height;
    }
  });
});
</script>

<style scoped></style>
