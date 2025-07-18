<template>
  <div class="tw-flex tw-items-center tw-justify-center tw-px-4">
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
          Internet bill
        </h1>
      </div>
      <div class="tw-flex tw-flex-col tw-items-center">
        <img
          class="tw-h-[180px] tw-mt-10"
          src="../public/internethero.png"
          alt=""
        />
        <p class="tw-text-[#989898] tw-text-[12px] tw-font-[500] tw-mt-3">
          01/10/2019 - 01/11/2019
        </p>
        <div
          class="tw-bg-[#3629B712] tw-w-full tw-rounded-[15px] tw-p-3 tw-mt-3"
        >
          <h1 class="tw-text-[#343434] tw-text-[16px] tw-font-semibold">
            All the Bills
          </h1>
          <div class="tw-w-full tw-mt-3 tw-flex tw-flex-col tw-gap-4">
            <div class="tw-flex tw-items-center tw-justify-between">
              <h3 class="tw-text-[#979797] tw-text-[12px] tw-font-semibold">
                Name
              </h3>
              <span class="tw-text-[#343434] tw-text-[12px] tw-font-semibold"
                >Jackson Maine</span
              >
            </div>
            <div class="tw-flex tw-items-center tw-justify-between">
              <h3 class="tw-text-[#979797] tw-text-[12px] tw-font-semibold">
                Address
              </h3>
              <span class="tw-text-[#343434] tw-text-[12px] tw-font-semibold"
                >403 East 4th Street, Santa Ana</span
              >
            </div>
            <div class="tw-flex tw-items-center tw-justify-between">
              <h3 class="tw-text-[#979797] tw-text-[12px] tw-font-semibold">
                Phone number
              </h3>
              <span class="tw-text-[#343434] tw-text-[12px] tw-font-semibold"
                >+8424599721</span
              >
            </div>
            <div class="tw-flex tw-items-center tw-justify-between">
              <h3 class="tw-text-[#979797] tw-text-[12px] tw-font-semibold">
                Code
              </h3>
              <span class="tw-text-[#343434] tw-text-[12px] tw-font-semibold"
                >#2343543</span
              >
            </div>
            <div class="tw-flex tw-items-center tw-justify-between">
              <h3 class="tw-text-[#979797] tw-text-[12px] tw-font-semibold">
                From
              </h3>
              <span class="tw-text-[#343434] tw-text-[12px] tw-font-semibold"
                >01/10/2019</span
              >
            </div>
            <div class="tw-flex tw-items-center tw-justify-between">
              <h3 class="tw-text-[#979797] tw-text-[12px] tw-font-semibold">
                To
              </h3>
              <span class="tw-text-[#343434] tw-text-[12px] tw-font-semibold"
                >01/11/2019</span
              >
            </div>
          </div>
          <div class="tw-flex tw-flex-col tw-gap-3 tw-mt-4">
            <div
              class="tw-flex tw-items-center tw-justify-between tw-border-b tw-border-dotted tw-pb-2"
            >
              <h3
                class="tw-text-[#979797] tw-text-[16px] tw-italic tw-font-[500]"
              >
                To
              </h3>
              <span class="tw-text-[#3629B7] tw-text-[16px] tw-font-semibold"
                >$50</span
              >
            </div>
            <div
              class="tw-flex tw-border-b tw-border-dotted tw-items-center tw-justify-between tw-pb-2"
            >
              <h3
                class="tw-text-[#979797] tw-text-[16px] tw-italic tw-font-[500]"
              >
                Tax
              </h3>
              <span class="tw-text-[#3629B7] tw-text-[16px] tw-font-semibold"
                >$10</span
              >
            </div>
            <div
              class="tw-flex tw-border-b tw-border-dotted tw-items-center tw-justify-between tw-pb-2"
            >
              <h3 class="tw-text-[#343434] tw-text-[16px] tw-font-[500]">
                TOTAL
              </h3>
              <span class="tw-text-[#FF4267] tw-text-[28px] tw-font-semibold"
                >$10</span
              >
            </div>
          </div>
        </div>
        <div class="tw-w-full tw-mt-5">
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
        </div>
        <button
        @click="toBillConfirum"
          class="tw-h-[48px] tw-w-full tw-mx-auto tw-bg-[#3629B7] tw-text-white tw-rounded-md tw-mt-auto tw-mb-10"
        >
          Pay the bill
        </button>
      </div>
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
function goToback() {
  window.parent.postMessage({ action: "changePage", url: "paythebill" }, "*");
}
function toBillConfirum(){
    window.parent.postMessage({ action: "changePage", url: "billConfirum" }, "*");
}
</script>

<style scoped></style>
