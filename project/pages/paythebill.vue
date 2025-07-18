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
          Pay the bill
        </h1>
      </div>
      <div class="tw-flex tw-flex-col tw-gap-4 tw-mt-5">
        <div
          class="tw-flex tw-items-center tw-justify-between tw-bg-[#3629B712] tw-rounded-[15px] tw-h-[110px] tw-px-3"
        >
          <div class="tw-flex tw-flex-col tw-items-start">
            <h1 class="tw-text-[16px] tw-font-semibold tw-text-[#343434]">
              Electric bill
            </h1>
            <span class="tw-text-[#979797] tw-text-[12px] tw-font-[500]"
              >Pay electric bill this month</span
            >
          </div>
          <div>
            <img
              class="tw-w-[90px] tw-h-[80px]"
              src="../public/electricBill.png"
              alt=""
            />
          </div>
        </div>
        <div
          class="tw-flex tw-items-center tw-justify-between tw-bg-[#3629B712] tw-rounded-[15px] tw-h-[110px] tw-px-3"
        >
          <div class="tw-flex tw-flex-col tw-items-start">
            <h1 class="tw-text-[16px] tw-font-semibold tw-text-[#343434]">
              Water bill
            </h1>
            <span class="tw-text-[#979797] tw-text-[12px] tw-font-[500]"
              >Pay water bill this month</span
            >
          </div>
          <div>
            <img
              class="tw-w-[90px] tw-h-[80px]"
              src="../public/electricBill.png"
              alt=""
            />
          </div>
        </div>
        <div
          class="tw-flex tw-items-center tw-justify-between tw-bg-[#3629B712] tw-rounded-[15px] tw-h-[110px] tw-px-3"
        >
          <div class="tw-flex tw-flex-col tw-items-start">
            <h1 class="tw-text-[16px] tw-font-semibold tw-text-[#343434]">
              Mobile bill
            </h1>
            <span class="tw-text-[#979797] tw-text-[12px] tw-font-[500]"
              >Pay mobile bill this month</span
            >
          </div>
          <div>
            <img
              class="tw-w-[90px] tw-h-[80px]"
              src="../public/electricBill.png"
              alt=""
            />
          </div>
        </div>
        <div
          @click="toInternetBill"
          class="tw-flex tw-items-center tw-justify-between tw-bg-[#3629B712] tw-rounded-[15px] tw-h-[110px] tw-px-3"
        >
          <div class="tw-flex tw-flex-col tw-items-start">
            <h1 class="tw-text-[16px] tw-font-semibold tw-text-[#343434]">
              Internet bill
            </h1>
            <span class="tw-text-[#979797] tw-text-[12px] tw-font-[500]"
              >Pay internet bill this month</span
            >
          </div>
          <div>
            <img
              class="tw-w-[90px] tw-h-[80px]"
              src="../public/electricBill.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
function goToback() {
  window.parent.location.href = "http://localhost:3000";
}
function toInternetBill() {
  window.parent.postMessage({ action: "changePage", url: "internetBill" }, "*");
}
</script>

<style scoped></style>
