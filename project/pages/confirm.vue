<template>
  <div class="tw-flex tw-items-center tw-justify-center tw-h-screen">
    <div
      class="tw-max-w-[400px] tw-h-full tw-w-full tw-bg-white tw-px-4 tw-flex tw-flex-col"
    >
      <div class="tw-flex tw-items-center tw-gap-10 tw-mt-3">
        <img
          @click="goToback"
          class="tw-w-[16px] tw-h-[16px]"
          src="../public/leftarrow.png"
          alt=""
        />
        <h1 class="tw-text-[20px] tw-font-semibold tw-text-[#343434]">
          Confirm
        </h1>
      </div>
      <div class="tw-flex tw-flex-col">
        <div class="tw-mt-5">
          <span class="tw-text-[#979797] tw-font-semibold tw-text-[12px]"
            >Confirm transaction information</span
          >
          <div class="tw-mt-4 tw-flex tw-flex-col tw-gap-2">
            <v-text-field
              v-model="cardfrom"
              label="from"
              variant="solo"
            ></v-text-field>
            <v-text-field
              v-model="cardto"
              label="to"
              variant="solo"
            ></v-text-field>
            <v-text-field
              v-model="price"
              label="Amount"
              variant="solo"
            ></v-text-field>
          </div>
        </div>
      </div>
      <button
        @click="tosuccess"
        class="tw-h-[48px] tw-w-full tw-mx-auto tw-bg-[#3629B7] tw-text-white tw-rounded-md tw-mt-auto tw-mb-10"
      >
        Confirm
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const cardfrom = ref("**** **** 6789");
const cardto = ref("+8564757899");
const price = ref("$1000");
function goToback() {
  window.parent.postMessage({ action: "changePage", url: "prePaid" }, "*");
}
function tosuccess() {
  window.parent.postMessage(
    { action: "changePage", url: "confirmsuccess" },
    "*"
  );
}
</script>

<style scoped></style>
