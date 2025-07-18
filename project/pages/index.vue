<template>
  <div class="tw-flex tw-items-center tw-justify-center tw-relative">
    <div
      class="tw-max-w-[330px] tw-bg-white tw-w-full tw-grid tw-grid-cols-3 tw-gap-2"
    >
      <NuxtLink
        @click="sendInfo"
        to="/accountandcard"
        class="tw-w-[100px] tw-h-[100px] tw-flex tw-items-center tw-justify-center tw-flex-col tw-rounded-[15px] tw-p-2 tw-bg-[#0000000D] tw-gap-1"
      >
        <img
          class="tw-w-[28px] tw-h-[28px]"
          src="../public/wallet.png"
          alt=""
        />
        <span class="tw-text-[#979797] tw-text-[12px] tw-text-center"
          >Account and Card</span
        >
      </NuxtLink>

      <NuxtLink
        class="tw-w-[100px] tw-h-[100px] tw-flex tw-items-center tw-justify-center tw-flex-col tw-rounded-[15px] tw-p-2 tw-bg-[#0000000D] tw-gap-1"
      >
        <img
          class="tw-w-[28px] tw-h-[28px]"
          src="../public/transfer.png"
          alt=""
        />
        <span class="tw-text-[#979797] tw-text-[12px] tw-text-center"
          >Transfer</span
        >
      </NuxtLink>

      <NuxtLink
        to="/drewpage"
        @click="toDrew"
        class="tw-w-[100px] tw-h-[100px] tw-flex tw-items-center tw-justify-center tw-flex-col tw-rounded-[15px] tw-p-2 tw-bg-[#0000000D] tw-gap-1"
      >
        <img
          class="tw-w-[28px] tw-h-[28px]"
          src="../public/withdraw.png"
          alt=""
        />
        <span class="tw-text-[#979797] tw-text-[12px] tw-text-center"
          >Withdraw</span
        >
      </NuxtLink>
      <div
        @click="PrePaid"
        class="tw-w-[100px] tw-h-[100px] tw-flex tw-items-center tw-justify-center tw-flex-col tw-rounded-[15px] tw-p-2 tw-bg-[#0000000D] tw-gap-1"
      >
        <img
          class="tw-w-[28px] tw-h-[28px]"
          src="../public/prepaid.png"
          alt=""
        />
        <span class="tw-text-[#979797] tw-text-[12px] tw-text-center"
          >Mobile Prepaid</span
        >
      </div>
      <div
        @click="internetBill"
        class="tw-w-[100px] tw-h-[100px] tw-flex tw-items-center tw-justify-center tw-flex-col tw-rounded-[15px] tw-p-2 tw-bg-[#0000000D] tw-gap-1"
      >
        <img
          class="tw-w-[28px] tw-h-[28px]"
          src="../public/paywithbill.png"
          alt=""
        />
        <span class="tw-text-[#979797] tw-text-[12px] tw-text-center"
          >Pay the bill</span
        >
      </div>
      <div
        class="tw-w-[100px] tw-h-[100px] tw-flex tw-items-center tw-justify-center tw-flex-col tw-rounded-[15px] tw-p-2 tw-bg-[#0000000D] tw-gap-1"
      >
        <img
          class="tw-w-[28px] tw-h-[28px]"
          src="../public/saveonline.png"
          alt=""
        />
        <span class="tw-text-[#979797] tw-text-[12px] tw-text-center"
          >Save online</span
        >
      </div>
      <div
        class="tw-w-[100px] tw-h-[100px] tw-flex tw-items-center tw-justify-center tw-flex-col tw-rounded-[15px] tw-p-2 tw-bg-[#0000000D] tw-gap-1"
      >
        <img
          class="tw-w-[28px] tw-h-[28px]"
          src="../public/creditcard.png"
          alt=""
        />
        <span class="tw-text-[#979797] tw-text-[12px] tw-text-center"
          >Credit card</span
        >
      </div>
      <div
        class="tw-w-[100px] tw-h-[100px] tw-flex tw-items-center tw-justify-center tw-flex-col tw-rounded-[15px] tw-p-2 tw-bg-[#0000000D] tw-gap-1"
      >
        <img
          class="tw-w-[28px] tw-h-[28px]"
          src="../public/report.png"
          alt=""
        />
        <span class="tw-text-[#979797] tw-text-[12px] tw-text-center"
          >Transaction report</span
        >
      </div>
      <div
        class="tw-w-[100px] tw-h-[100px] tw-flex tw-items-center tw-justify-center tw-flex-col tw-rounded-[15px] tw-p-2 tw-bg-[#0000000D] tw-gap-1"
      >
        <img
          class="tw-w-[28px] tw-h-[28px]"
          src="../public/Beneficiary.png"
          alt=""
        />
        <span class="tw-text-[#979797] tw-text-[12px] tw-text-center"
          >Beneficiary</span
        >
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
function sendInfo() {
  window.parent.postMessage(
    { action: "changePage", url: "accountandcard" },
    "*"
  );
}
function toDrew() {
  window.parent.postMessage({ action: "changePage", url: "drewpage" }, "*");
}
function PrePaid() {
  window.parent.postMessage({ action: "changePage", url: "prePaid" }, "*");
}
function internetBill() {
  window.parent.postMessage({ action: "changePage", url: "paythebill" }, "*");
}
</script>
