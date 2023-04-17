<template>
  <div class="border-bottom-grey pb-10 lg:pb-4 mb-4 relative">
    <div class="lg:w-fit w-[50%]">
      <h1
        class="mb-1 font-quicksand font-bold text-2xl leading-9 tracking-[-0.02rem]"
      >
        Customer
      </h1>
      <p class="text-sm leading-7 tracking-[0.01rem] text-secondary">
        You can manage and organize your customer and other things here
      </p>
    </div>

    <!-- tab -->
    <ul
      class="flex items-center gap-2 absolute right-0 bottom-[.8em] font-quicksand font-semibold text-sm leading-[21px] tracking-[-0.01rem] text-secondary"
    >
      <li>
        <a
          href="#"
          class="lg:px-[66.17px] py-3 border-b-2 border-b-primary text-primary font-bold px-[24px]"
          >Customer</a
        >
      </li>
      <li>
        <a
          href="#"
          class="lg:px-[66.17px] py-3 hover:border-b-2 hover:border-b-primary hover:text-primary hover:font-bold px-[24px]"
          >Promo</a
        >
      </li>
      <li>
        <a
          href="#"
          class="lg:px-[66.17px] py-3 hover:border-b-2 hover:border-b-primary hover:text-primary hover:font-bold px-[24px]"
          >Voucher</a
        >
      </li>
    </ul>

    <!-- tab -->
    <button>
      <img
        src="~/assets/image/menu.png"
        alt="menu"
        class="w-[32px] absolute top-1 right-0 lg:hidden"
        @click="toggleNav"
      />
    </button>
  </div>

  <!-- mobile nav link -->
  <div
    :class="showMenu ? 'flex' : 'hidden'"
    class="flex-col space-y-9 absolute top-[62px] right-0 left-0 bottom-0 bg-white w-full h-full lg:hidden z-[99999]"
  >
    <sidebar class="!block !w-full !border-r-0"></sidebar>
  </div>
</template>

<script setup>
  import sidebar from "./sidebar.vue";
  import { ref } from "vue";

  let showMenu = ref(false);
  const toggleNav = () => (showMenu.value = !showMenu.value);
</script>

<style></style>
