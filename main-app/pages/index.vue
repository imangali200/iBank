<template>
  <div>
    <Header />
    <div class="tw-flex tw-items-center tw-justify-center tw-relative tw-px-4">
      <div
        class="tw-max-w-[400px] tw-h-[700px] tw-flex tw-flex-col tw-items-center tw-w-full tw-bg-white tw-rounded-t-[30px] tw-absolute tw-top-[-22px] tw-z-2"
      >
        <img
          class="tw-max-w-[360px] tw-max-h-[221px] tw-w-full tw-h-full tw-mx-auto"
          src="../public/cart.png"
          alt=""
        />
        <div class="tw-bg-white">
          <iframe
            class="tw-z-50"
            src="i-bank-ubvt.vercel.app"
            :width="rewidth"
            :height="reHeight"
            frameborder="0"
          >
          </iframe>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import {useRouter} from 'vue-router'
const router = useRouter();
const rewidth = ref("330px");
const reHeight = ref("316px");
onMounted(() => {
  window.addEventListener("message", (event) => {
    if (event.data.action === "changePage") {
      const url = event.data.url;
      console.log(url);
      router.push({
        path:'/iframePage',
        query:{url: event.data.url}
      })
    }
  });
});
</script>

<style scoped></style>
