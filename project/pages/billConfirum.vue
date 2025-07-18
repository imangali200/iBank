<template>
  <div class="tw-flex tw-items-center tw-justify-centertw-h-screen">
    <div
      class="tw-max-w-[400px] tw-h-full tw-flex tw-flex-col tw-w-full t tw-bg-white tw-px-4"
    >
      <img class="tw-mt-[50px]" src="../public/confirmhero.png" alt="" />
      <div class="tw-flex tw-items-center tw-flex-col tw-gap-3 tw-mt-7">
        <h2 class="tw-text-[#3629B7] tw-font-semibold tw-text-[16px]">
          Transaction successfully!
        </h2>
        <p
          class="tw-text-[#343434] tw-text-center tw-text-[14px] tw-font-[500] tw-w-[310px]"
        >
          You 've pay your internet bill!
        </p>
      </div>
      <button
        @click="toHome"
        class="tw-h-[48px] tw-w-full tw-mx-auto tw-bg-[#3629B7] tw-text-white tw-rounded-md  tw-mt-4"
      >
        Confirm
      </button>
    </div>
  </div>
</template>

<script setup>
const config = useRuntimeConfig()
console.log(config.public.baseUrl)
function toHome(){
    window.parent.location.href = 'https://i-bank-wheat.vercel.app/'
}
</script>

<style scoped></style>
