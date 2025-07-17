<template>
  <div class="tw-flex tw-items-center tw-justify-center tw-relative tw-px-4">
    <div class="tw-max-w-[400px] tw-h-[800px] tw-w-full tw-bg-white ">
      <div class="tw-pl-14 tw-mt-3">
        <h1 class="tw-text-[20px] tw-font-semibold tw-text-[#343434]">
          Account and card
        </h1>
      </div>
      <div
        class="tw-flex tw-flex-col tw-items-center tw-justify-center tw-my-5 tw-gap-4"
      >
        <div class="tw-flex tw-items-center tw-gap-3">
          <button
            @click="type = 'account'"
            :class="
              type === 'account'
                ? 'tw-bg-[#3629B7] tw-text-white'
                : 'tw-bg-[#F2F1F9] tw-text-black'
            "
            class="tw-w-[155px] tw-h-[44px] tw-rounded-[15px]"
          >
            Account
          </button>
          <button
            @click="type = 'card'"
            :class="
              type === 'card'
                ? 'tw-bg-[#3629B7] tw-text-white'
                : 'tw-bg-[#F2F1F9] tw-text-black'
            "
            class="tw-w-[155px] tw-h-[44px] tw-rounded-[15px]"
          >
            Card
          </button>
        </div>
      </div>
      <div
        v-if="type === 'account'"
        class="tw-flex tw-flex-col tw-gap-3 tw-items-center tw-mb-5"
      >
        <div class="tw-flex tw-flex-col tw-gap-3 tw-items-center">
          <img
            class="tw-w-[100px] tw-h-[100px]"
            src="../public/man.png"
            alt=""
          />
          <h2 class="tw-text-[#3629B7] tw-font-[500]">Push Puttichai</h2>
        </div>
        <div
          class="tw-bg-[#3629B712] tw-max-[#3629B712] tw-h-[108px] tw-max-w-[350px] tw-flex tw-flex-col tw-gap-2 tw-w-full tw-rounded-[15px] tw-p-3"
        >
          <div class="tw-flex tw-items-center tw-justify-between">
            <h1 class="tw-text-[#343434] tw-font-semibold tw-text-base">
              Account 1
            </h1>
            <h2 class="tw-text-[#343434] tw-font-semibold tw-text-base">
              1900 8988 1234
            </h2>
          </div>
          <div class="tw-flex tw-items-center tw-justify-between">
            <span class="tw-text-[#979797]">Avalable balance</span>
            <span class="tw-text-[#3629B7] tw-font-semibold">$20,000</span>
          </div>
          <div class="tw-flex tw-items-center tw-justify-between">
            <span class="tw-text-[#979797]">Branch</span>
            <span class="tw-text-[#3629B7] tw-font-semibold">New York</span>
          </div>
        </div>
        <div
          class="tw-bg-[#3629B712] tw-max-[#3629B712] tw-h-[108px] tw-max-w-[350px] tw-flex tw-flex-col tw-gap-2 tw-w-full tw-rounded-[15px] tw-p-3"
        >
          <div class="tw-flex tw-items-center tw-justify-between">
            <h1 class="tw-text-[#343434] tw-font-semibold tw-text-base">
              Account 1
            </h1>
            <h2 class="tw-text-[#343434] tw-font-semibold tw-text-base">
              1900 8988 1234
            </h2>
          </div>
          <div class="tw-flex tw-items-center tw-justify-between">
            <span class="tw-text-[#979797]">Avalable balance</span>
            <span class="tw-text-[#3629B7] tw-font-semibold">$20,000</span>
          </div>
          <div class="tw-flex tw-items-center tw-justify-between">
            <span class="tw-text-[#979797]">Branch</span>
            <span class="tw-text-[#3629B7] tw-font-semibold">New York</span>
          </div>
        </div>
        <div
          class="tw-bg-[#3629B712] tw-max-[#3629B712] tw-h-[108px] tw-max-w-[350px] tw-flex tw-flex-col tw-gap-2 tw-w-full tw-rounded-[15px] tw-p-3"
        >
          <div class="tw-flex tw-items-center tw-justify-between">
            <h1 class="tw-text-[#343434] tw-font-semibold tw-text-base">
              Account 1
            </h1>
            <h2 class="tw-text-[#343434] tw-font-semibold tw-text-base">
              1900 8988 1234
            </h2>
          </div>
          <div class="tw-flex tw-items-center tw-justify-between">
            <span class="tw-text-[#979797]">Avalable balance</span>
            <span class="tw-text-[#3629B7] tw-font-semibold">$20,000</span>
          </div>
          <div class="tw-flex tw-items-center tw-justify-between">
            <span class="tw-text-[#979797]">Branch</span>
            <span class="tw-text-[#3629B7] tw-font-semibold">New York</span>
          </div>
        </div>
      </div>
      <div v-if="type === 'card'" class="tw-flex tw-flex-col tw-items-center">
        <img
          class="tw-max-w-[370px] tw-max-h-[230px] tw-w-full tw-h-full tw-mx-auto"
          src="../public/card.png"
          alt=""
        />
        <img
          class="tw-max-w-[370px] tw-max-h-[230px] tw-w-full tw-h-full tw-mx-auto"
          src="../public/card2.png"
          alt=""
        />
        <button
          class="tw-bg-[#3629B7] tw-max-w-[327px] tw-w-full tw-h-[44px] tw-rounded-[15px] tw-text-white tw-mt-5"
        >
          Add card
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const type = ref("account");
// function toBack() {
//   window.parent.postMessage(
//     { action: "toBack", url:'"http://localhost:3000' },
//     "http://localhost:3000"
//   );
// }
</script>

<style scoped></style>
