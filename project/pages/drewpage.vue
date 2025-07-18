<template>
  <div class="tw-flex tw-items-center tw-justify-center tw-px-4 tw-h-screen">
    <div class="tw-max-w-[400px] tw-h-full tw-flex tw-flex-col tw-w-full tw-bg-white tw-px-3">
      <div class="tw-flex tw-items-center tw-gap-8 tw-mt-3 tw-pl-3">
        <img
          @click="goToback"
          class="tw-w-[16px] tw-h-[16px]"
          src="../public/leftarrow.png"
          alt=""
        />
        <h1
          class="tw-text-[20px] tw-pl-14 tw-mt-3 tw-font-semibold tw-text-[#343434]"
        >
          Withdraw
        </h1>
      </div>

      <img
        class="tw-w-[362px] tw-h-[188px] tw-mx-auto tw-mt-10"
        src="../public/withdrawhero.png"
        alt=""
      />
      <div
        class="tw-w-full tw-mx-auto tw-mt-[40px] tw-flex tw-flex-col tw-items-center"
      >
        <v-autocomplete
          class="tw-max-w-[347px] tw-w-full"
          placeholder="Choose account/card"
          :items="cards"
          item-title="title"
          variant="outlined"
          density="comfortable"
          clearable
          :menu-props="{ location: 'bottom' }"
        ></v-autocomplete>
        <input
          class="tw-max-w-[347px] tw-w-full tw-border-[1px] tw-h-[48px] tw-rounded-md tw-border-[#afabab] tw-pl-3"
          type="number"
          placeholder="Phone number"
        />
      </div>
      <div class="tw-flex tw-flex-col tw-items-center tw-mt-[20px] tw-relative">
        <p
          class="tw-text-[#979797] tw-font-semibold tw-text-[12px] tw-absolute tw-left-[18px]"
        >
          Choose amount
        </p>
        <div
          v-if="selected !== 'other'"
          class="tw-grid tw-grid-cols-3 tw-max-w-[340px] tw-w-full tw-gap-2 tw-mt-7"
        >
          <div
            :class="
              selected === '$10'
                ? 'tw-bg-[#3629B7] tw-text-white'
                : 'tw-text-[#979797] tw-bg-[#0000000D]'
            "
            @click="selected = '$10'"
            class="tw-bg-[#0000000D] tw-rounded-[15px] tw-h-[60px] tw-max-w-[100px] tw-w-full tw-text-[#979797] tw-font-semibold tw-text-[16px] tw-flex tw-items-center tw-justify-center"
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
            class="tw-bg-[#0000000D] tw-rounded-[15px] tw-h-[60px] tw-max-w-[100px] tw-w-full tw-text-[#979797] tw-font-semibold tw-text-[16px] tw-flex tw-items-center tw-justify-center"
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
            class="tw-bg-[#0000000D] tw-rounded-[15px] tw-h-[60px] tw-max-w-[100px] tw-w-full tw-text-[#979797] tw-font-semibold tw-text-[16px] tw-flex tw-items-center tw-justify-center"
          >
            $100
          </div>
          <div
            :class="
              selected === '$150'
                ? 'tw-bg-[#3629B7] tw-text-white'
                : 'tw-text-[#979797] tw-bg-[#0000000D]'
            "
            @click="selected = '$150'"
            class="tw-bg-[#0000000D] tw-rounded-[15px] tw-h-[60px] tw-max-w-[100px] tw-w-full tw-text-[#979797] tw-font-semibold tw-text-[16px] tw-flex tw-items-center tw-justify-center"
          >
            $150
          </div>
          <div
            :class="
              selected === '$200'
                ? 'tw-bg-[#3629B7] tw-text-white'
                : 'tw-text-[#979797] tw-bg-[#0000000D]'
            "
            @click="selected = '$200'"
            class="tw-bg-[#0000000D] tw-rounded-[15px] tw-h-[60px] tw-max-w-[100px] tw-w-full tw-text-[#979797] tw-font-semibold tw-text-[16px] tw-flex tw-items-center tw-justify-center"
          >
            $200
          </div>
          <div
            @click="selected = 'other'"
            :class="
              selected === 'other'
                ? 'tw-bg-[#3629B7] tw-text-white'
                : 'tw-text-[#979797] tw-bg-[#0000000D]'
            "
            class="tw-rounded-[15px] tw-h-[60px] tw-max-w-[100px] tw-w-full tw-font-semibold tw-text-[16px] tw-flex tw-items-center tw-justify-center"
          >
            Other
          </div>
        </div>

        <input
          v-if="selected === 'other'"
          class="tw-max-w-[347px] tw-w-full tw-mx-auto tw-border-[1px] tw-h-[48px] tw-rounded-md tw-mt-9 tw-border-[#afabab] tw-pl-3"
          type="number"
          placeholder="Phone number"
        />
      </div>
      <NuxtLink
        to="/drewSucces"
        @click="drewSucces"
        class="tw-w-full tw-flex tw-items-center tw-mt-[25px]"
      >
        <button
          :class="
            selected ? 'tw-bg-[#3629B7] tw-text-white' : 'tw-bg-[#F2F1F9]'
          "
          class="tw-max-w-[357px] tw-h-[44px] tw-w-full tw-mx-auto tw-rounded-md tw-mt-auto"
        >
          Verify
        </button>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
const cards = [
  { title: "Kaspi Card (4411 **** 1234)", value: "441100001234" },
  { title: "Halyk Card (5522 **** 5678)", value: "552211115678" },
  { title: "Jusan Card (6633 **** 9876)", value: "663322229876" },
  { title: "Freedom Card (7744 **** 4321)", value: "774433334321" },
];
import { ref } from "vue";
const selected = ref("");

function drewSucces() {
  window.parent.postMessage(
    { action: "changePage", url: "drewSuccess" },
    "http://localhost:3000"
  );
}
function goToback() {
  window.parent.location.href = "http://localhost:3000";
}
</script>

<style scoped>
.v-field--appended {
  border-radius: 120px;
}
</style>
