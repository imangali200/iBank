<template>
  <div class="tw-flex tw-items-center tw-justify-center tw-px-4 tw-h-screen">
    <div
      class="tw-max-w-[400px] tw-h-full tw-flex tw-flex-col tw-w-full t tw-bg-white tw-px-4"
    >
      <div class="tw-flex tw-items-center tw-gap-10 tw-mt-3">
        <img
          @click="goToback"
          class="tw-w-[16px] tw-h-[16px]"
          src="../public/leftarrow.png"
          alt=""
        />
        <h1 class="tw-text-[20px] tw-font-semibold tw-text-[#343434]">
          Mobile prepaid
        </h1>
      </div>
      <div class="tw-flex tw-flex-col tw-items-center tw-mt-5 tw-w-full">
        <v-autocomplete
          class="tw-w-full"
          placeholder="Choose account/card"
          :items="cards"
          item-title="title"
          variant="outlined"
          density="comfortable"
          clearable
          :menu-props="{ location: 'bottom' }"
        ></v-autocomplete>
        <div class="tw-w-full">
          <div class="tw-flex tw-items-center tw-justify-between">
            <h3 class="tw-text-[#989898] tw-text-[12px] tw-font-semibold">
              Directory
            </h3>
            <h3 class="tw-text-[#3629B7] tw-text-[12px] tw-font-semibold">
              Find beneficiary
            </h3>
          </div>
          <div class="tw-flex tw-gap-3 tw-mt-3">
            <div
              @click="personSelected = 'add'"
              :class="
                personSelected === 'add'
                  ? 'tw-bg-[#3629B7] tw-text-white'
                  : 'tw-text-[#343434] tw-bg-[#0000000D]'
              "
              class="tw-w-[120px] tw-h-[140px] tw-rounded-[15px] tw-text-[14px] tw-flex tw-flex-col tw-items-center tw-justify-center tw-gap-2"
            >
              <img
                @click="personSelected = 'emma'"
                class="tw-rounded-[50%] tw-w-[60px] tw-h-[60px] tw-p-3 tw-bg-[#d7d7d9]"
                src="../public/add.png"
                alt=""
              />
            </div>
            <div
              :class="
                personSelected === 'emma'
                  ? 'tw-bg-[#3629B7] tw-text-white'
                  : 'tw-text-[#343434] tw-bg-[#0000000D]'
              "
              @click="personSelected = 'emma'"
              class="tw-w-[120px] tw-h-[140px] tw-rounded-[15px] tw-bg-[#0000000D] tw-text-black tw-text-[14px] tw-flex tw-flex-col tw-items-center tw-justify-center tw-gap-2"
            >
              <img
                class="tw-rounded-[50%] tw-w-[60px] tw-h-[60px]"
                src="../public/emma.png"
                alt=""
              />
              <span>Emma</span>
            </div>
            <div
              @click="personSelected = 'justin'"
              :class="
                personSelected === 'justin'
                  ? 'tw-bg-[#3629B7] tw-text-white'
                  : 'tw-text-[#343434] tw-bg-[#0000000D]'
              "
              class="tw-w-[120px] tw-h-[140px] tw-rounded-[15px] tw-bg-[#0000000D] tw-text-black tw-text-[14px] tw-flex tw-flex-col tw-items-center tw-justify-center tw-gap-2"
            >
              <img
                class="tw-rounded-[50%] tw-w-[60px] tw-h-[60px]"
                src="../public/justin.png"
                alt=""
              />
              <span>Justin</span>
            </div>
          </div>
          <div class="tw-flex tw-flex-col tw-gap-2 tw-mt-4">
            <p class="tw-text-[#979797] tw-font-semibold tw-text-[12px]">
              Phone number
            </p>
            <input
              class="tw-max-w-[347px] tw-w-full tw-border-[1px] tw-h-[48px] tw-rounded-xl tw-border-[#afabab] tw-pl-3"
              type="number"
              placeholder="Phone number"
            />
          </div>
          <div class="tw-mt-4">
            <p class="tw-text-[#979797] tw-font-semibold tw-text-[12px]">
              Choose amount
            </p>
            <div class="tw-flex tw-gap-3 tw-mt-3">
              <div
                :class="
                  selected === '$10'
                    ? 'tw-bg-[#3629B7] tw-text-white'
                    : 'tw-text-[#979797] tw-bg-[#0000000D]'
                "
                @click="selected = '$10'"
                class="tw-bg-[#0000000D] tw-rounded-[15px] tw-h-[60px] tw-max-w-[120px] tw-w-full tw-text-[#979797] tw-font-semibold tw-text-[16px] tw-flex tw-items-center tw-justify-center"
              >
                $10
              </div>
              <div
                :class="
                  selected === '$50'
                    ? 'tw-bg-[#3629B7] tw-text-white'
                    : 'tw-text-[#979797] tw-bg-[#0000000D]'
                "
                @click="selected = '$50'"
                class="tw-bg-[#0000000D] tw-rounded-[15px] tw-h-[60px] tw-max-w-[120px] tw-w-full tw-text-[#979797] tw-font-semibold tw-text-[16px] tw-flex tw-items-center tw-justify-center"
              >
                $50
              </div>
              <div
                @click="selected = '$100'"
                :class="
                  selected === '$100'
                    ? 'tw-bg-[#3629B7] tw-text-white'
                    : 'tw-text-[#979797] tw-bg-[#0000000D]'
                "
                class="tw-bg-[#0000000D] tw-rounded-[15px] tw-h-[60px] tw-max-w-[120px] tw-w-full tw-text-[#979797] tw-font-semibold tw-text-[16px] tw-flex tw-items-center tw-justify-center"
              >
                $100
              </div>
            </div>
          </div>
        </div>
      </div>
      <button
        @click="toConfirm"
        :class="selected ? 'tw-bg-[#3629B7] tw-text-white' : 'tw-bg-[#F2F1F9]'"
        class="tw-h-[48px] tw-w-full tw-mx-auto tw-text-white tw-rounded-md tw-mt-auto tw-mb-10"
      >
        Confirm
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const selected = ref("");
const personSelected = ref("");
function goToback() {
  window.parent.location.href = "https://i-bank-31r4f68q1-imangali.vercel.app/";
}
const cards = [
  { title: "Kaspi Card (4411 **** 1234)", value: "441100001234" },
  { title: "Halyk Card (5522 **** 5678)", value: "552211115678" },
  { title: "Jusan Card (6633 **** 9876)", value: "663322229876" },
  { title: "Freedom Card (7744 **** 4321)", value: "774433334321" },
];
function toConfirm() {
  window.parent.postMessage(
    { action: "changePage", url: "confirm" },
    "http://localhost:3000"
  );
}
</script>

<style scoped></style>
